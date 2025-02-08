import { Todo } from '../types';

export const updateTodo = async (data: Todo): Promise<Todo> => {
    const response = await fetch('https://mymockapi/updateTodo', { method: 'PUT', body: JSON.stringify(data) });
    return response.json() as Promise<Todo>;
};
