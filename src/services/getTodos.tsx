import { Todo } from '../types';

export const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch('https://mymockapi/getTodos');
    return response.json() as Promise<Todo[]>;
};
