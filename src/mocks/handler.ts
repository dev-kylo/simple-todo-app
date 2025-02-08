/* eslint-disable @typescript-eslint/no-unsafe-return */
import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Status } from '../types';

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
    http.post('https://mymockapi/addTodo', async ({ request }) => {
        const todoData = (await request.json()) as Todo;
        if (!todoData) {
            return HttpResponse.json({ error: 'No todo data provided' }, { status: 400 });
        }
        todoData.id = uuidv4();
        todoData.status = 'backlog';
        todoData.user.name = 'Max';
        todoData.user.profileUrl = 'https://api.dicebear.com/9.x/adventurer/svg?seed=Max';
        data.push(todoData);
        return HttpResponse.json(todoData);
    }),
    http.put('https://mymockapi/updateTodo', async ({ request }) => {
        const { id, status } = (await request.json()) as { id: string; status: Status };
        const todoFound = data.find((todo: Todo) => todo.id === id) as Todo;
        if (todoFound) {
            todoFound!.status = status;
        }
        return HttpResponse.json({});
    }),
];
