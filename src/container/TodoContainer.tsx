import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Header from '../components/Header';
import { Status, Todo } from '../types';
import SideBar from '../components/SideBar';
import TaskForm from '../components/Form';
import Board from '../components/Board';
import { getTodos } from '../services/getTodos';
import { updateTodo } from '../services/updateTodo';

const TodoContainer: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const queryClient = useQueryClient();

    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
    const mutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });

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
        mutation.mutate({ id, status });
    };

    const delTodo = (id: string) => {
        setTodos(query.data?.filter((todo) => todo.id !== id));
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
    };

    const openSideBarHandler = () => {
        setOpenSideBar(true);
    };

    const closeSideBarHandler = () => {
        setOpenSideBar(false);
    };

    if (query.isLoading) {
        return <div>Loading...</div>;
    }

    if (query.isError || !query.data) {
        return <div>Error</div>;
    }

    const backlogData = query.data?.filter((todo) => todo.status === 'backlog');
    const inProgressData = query.data?.filter((todo) => todo.status === 'inProgress');
    const completedData = query.data?.filter((todo) => todo.status === 'completed');

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
