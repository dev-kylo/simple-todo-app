import { Todo } from '../types';

export const addTodo = async (todoData: Todo): Promise<Todo> => {
    const response = await fetch('https://mymockapi/addTodo', {
        method: 'POST',
        body: JSON.stringify(todoData),
    });
    return response.json() as Promise<Todo>;
};
