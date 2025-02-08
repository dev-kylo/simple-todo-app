export type User = {
    id: string;
    name: string;
    profileUrl: string;
};

export type Status = 'backlog' | 'inProgress' | 'completed';

export type Todo = {
    id: string;
    title: string;
    description: string;
    user: User;
    status: Status;
};
