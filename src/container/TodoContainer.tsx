import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import { Status, Todo } from '../types';
import SideBar from '../components/SideBar';
import TaskForm from '../components/Form';
import Board from '../components/Board';
import { getTodos } from '../services/getTodos';
import { updateTodo } from '../services/updateTodo';

const TodoContainer: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
    const mutation = useMutation({
        mutationFn: updateTodo,
    });

    const [todos, setTodos] = useState<Todo[]>();

    const users = [
        {
            id: uuidv4(),
            name: 'John Doe',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
        },
        {
            id: uuidv4(),
            name: 'Sawyer',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
        },
    ];

    const handleChange = (id: string, status: Status) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status,
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodoItem = (data: { title: string; description: string; user: string; status: string }) => {
        setOpenSideBar(false);
        const { title, description, user: userId, status } = data;
        const newTodo = {
            id: uuidv4(),
            title,
            description,
            user: {
                id: userId,
                name: 'Max',
                profileUrl: users.find((user) => user.id === userId)?.profileUrl,
            },
            status: 'backlog',
        } as Todo;
        setTodos([...todos, newTodo]);
    };

    const openSideBarHandler = () => {
        setOpenSideBar(true);
    };

    const closeSideBarHandler = () => {
        setOpenSideBar(false);
    };

    const backlogData = todos.filter((todo) => todo.status === 'backlog');
    const inProgressData = todos.filter((todo) => todo.status === 'inProgress');
    const completedData = todos.filter((todo) => todo.status === 'completed');

    return (
        <div className="container">
            <Header openSideBar={openSideBarHandler} />
            <SideBar open={openSideBar} onClose={closeSideBarHandler}>
                <TaskForm onFinish={addTodoItem} users={users} />
            </SideBar>
            <Board
                updateCardStatus={handleChange}
                backlogData={backlogData}
                inProgressData={inProgressData}
                completedData={completedData}
            />
        </div>
    );
};

export default TodoContainer;
