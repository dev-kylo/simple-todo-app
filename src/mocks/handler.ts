/* eslint-disable @typescript-eslint/no-unsafe-return */
import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../types';

const data = [
    {
        id: uuidv4(),
        title: 'Setup development environment',
        description: 'Setup development environment',
        user: {
            id: uuidv4(),
            name: 'John Doe',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
        },
        status: 'completed',
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
] as Todo[];

export const handlers = [
    http.get('https://mymockapi/getTodos', () => {
        return HttpResponse.json(data);
    }),
    http.put('https://mymockapi/updateTodo', async ({ request }) => {
        const { id, status } = await request.json();
        console.log('id', id);
        const todoFound = data.find((todo: Todo) => todo.id === id)!;
        if (todoFound) {
            todoFound!.status = status;
        }
        return HttpResponse.json({});
    }),
];
