import { Todo, Status } from '../types';

export const updateTodo = async ({ id, status }: { id: string; status: Status }): Promise<Todo> => {
    const response = await fetch('https://mymockapi/updateTodo', {
        method: 'PUT',
        body: JSON.stringify({ id, status }),
    });
    return response.json() as Promise<Todo>;
};
