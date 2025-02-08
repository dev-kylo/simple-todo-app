/* eslint-disable @typescript-eslint/no-unsafe-return */
import { http, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Status } from '../types';

const users = [
    {
        id: uuidv4(),
        name: 'John Doe',
        profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
    },
    {
        id: uuidv4(),
        name: 'Sawyer',
        profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer',
    },
    {
        id: uuidv4(),
        name: 'Max',
        profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Max',
    },
];

const data = [
    {
        id: uuidv4(),
        title: 'Complete the todo app',
        description: 'Finish all remaining subtasks',
        user: {
            id: uuidv4(),
            name: 'Andrea',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
        },
        status: 'backlog',
    },
    {
        id: uuidv4(),
        title: 'Allow editing todos',
        description: 'Add edit button to each todo',
        user: {
            id: uuidv4(),
            name: 'Sawyer',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer',
        },
        status: 'backlog',
    },
    {
        id: uuidv4(),
        title: 'Write more e2e tests',
        description: 'Test adding and updating todos.',
        user: {
            id: uuidv4(),
            name: 'Sawyer',
            profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
        },
        status: 'inProgress',
    },
] as Todo[];

export const handlers = [
    http.get('https://mymockapi/getTodos', () => {
        return HttpResponse.json(data);
    }),
    http.get('https://mymockapi/getUsers', () => {
        return HttpResponse.json(users);
    }),
    http.post('https://mymockapi/addTodo', async ({ request }) => {
        const todoData = (await request.json()) as Todo;
        if (!todoData) {
            return HttpResponse.json({ error: 'No todo data provided' }, { status: 400 });
        }
        todoData.id = uuidv4();
        todoData.status = 'backlog';
        todoData.user = users.find((user) => user.id === todoData.user.id)!;
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
