import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Board from '../components/Board';
import { Todo } from '../types';

describe('Board', () => {
    it('renders todo cards in correct status columns', () => {
        const mockTodos = [
            {
                id: '1',
                title: 'Task 1',
                status: 'backlog',
                user: {
                    id: '1',
                    name: 'John Doe',
                    profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
                },
            },
            {
                id: '2',
                title: 'Task 2',
                status: 'inProgress',
                user: {
                    id: '2',
                    name: 'Sawyer',
                    profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea',
                },
            },
            {
                id: '3',
                title: 'Task 3',
                status: 'completed',
                user: { id: '3', name: 'Max', profileUrl: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Andrea' },
            },
        ] as Todo[];

        const mocked = vi.fn();

        render(
            <Board
                updateCardStatus={mocked}
                backlogData={mockTodos.filter((todo) => todo.status === 'backlog')}
                inProgressData={mockTodos.filter((todo) => todo.status === 'inProgress')}
                completedData={mockTodos.filter((todo) => todo.status === 'completed')}
            />
        );

        // Check TODO column
        const todoColumn = screen.getByTestId('backlog');
        expect(todoColumn).toContainElement(screen.getByTestId('1'));

        // Check IN_PROGRESS column
        const inProgressColumn = screen.getByTestId('inProgress');
        expect(inProgressColumn).toContainElement(screen.getByTestId('2'));

        // Check DONE column
        const doneColumn = screen.getByTestId('completed');

        expect(doneColumn).toContainElement(screen.getByTestId('3'));
    });
});
