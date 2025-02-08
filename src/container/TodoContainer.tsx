\import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from '../components/TodosList';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import { Todo } from '../types';

const TodoContainer: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: uuidv4(),
            title: 'Setup development environment',
            description: 'Setup development environment',
            user: {
                id: uuidv4(),
                name: 'John Doe',
                profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
            },
            status: 'backlog',
        },
        {
            id: uuidv4(),
            title: 'Setup development environment',
            description: 'Setup development environment',
            user: {
                id: uuidv4(),
                name: 'Sawyer',
                profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
            },
            status: 'backlog',
        },

    ]);

    const handleChange = (id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status: todo.status === 'backlog' ? 'inProgress' : 'completed',
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodoItem = (todo: Todo) => {

        const { title, description, user, status } = todo;
        const newTodo = {
            id: uuidv4(),
            title,
            description: '',
            user: {
                id: uuidv4(),
                name: 'John Doe',
                profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
            },
            status: 'backlog',
        } as Todo;
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="container">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
            />
        </div>
    );
};

export default TodoContainer;