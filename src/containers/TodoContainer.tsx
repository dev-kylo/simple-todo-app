import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Header from '../components/Header';
import { Status, Todo } from '../types';
import SideBar from '../components/SideBar';
import TaskForm from '../components/Form';
import Board from '../components/Board';
import { getTodos } from '../services/getTodos';
import { updateTodo } from '../services/updateTodo';
import { addTodo } from '../services/addTodo';

const TodoContainer = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const queryClient = useQueryClient();

    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });
    const updateMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
    const addMutation = useMutation({
        mutationFn: addTodo,
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
        updateMutation.mutate({ id, status });
    };

    const addTodoItem = (data: { title: string; description: string; user: string; status: string }) => {
        setOpenSideBar(false);
        const { title, description, user: userId } = data;
        const newTodo = {
            title,
            description,
            user: { id: userId },
            status: 'backlog',
        } as Todo;
        addMutation.mutate(newTodo);
    };

    const openSideBarHandler = () => {
        setOpenSideBar(true);
    };

    const closeSideBarHandler = () => {
        setOpenSideBar(false);
    };

    if (query.isLoading) {
        return <div className="container">Loading...</div>;
    }

    if (query.isError || !query.data) {
        return <div className="container">Error</div>;
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
