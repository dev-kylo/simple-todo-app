import styled from 'styled-components';
import { useMemo } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Status, Todo } from '../types';
import TodoColumn from './Column';
import TodoCard from './TodoCard';

const BoardContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 24px;
    min-height: calc(100vh - 48px);
    background-color: #1a1a1a;
    overflow-x: auto;
    width: 100%;
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #2a2a2a;
    }
    &::-webkit-scrollbar-thumb {
        background: #4a4a4a;
        border-radius: 4px;
    }
`;

const Board = ({
    backlogData,
    inProgressData,
    completedData,
    updateCardStatus,
}: {
    backlogData: Todo[];
    inProgressData: Todo[];
    completedData: Todo[];
    updateCardStatus: (id: string, status: Status) => void;
}) => {
    const backlogCards = useMemo(
        () =>
            backlogData.map((todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    profileUrl={todo.user.profileUrl}
                />
            )),
        [backlogData]
    );

    const inProgressCards = useMemo(
        () =>
            inProgressData.map((todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    profileUrl={todo.user.profileUrl}
                />
            )),
        [inProgressData]
    );

    const completedCards = useMemo(
        () =>
            completedData.map((todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    profileUrl={todo.user.profileUrl}
                />
            )),
        [completedData]
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        updateCardStatus(active.id as string, over?.id as Status);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <BoardContainer>
                <TodoColumn title="Backlog" id="backlog">
                    {backlogCards}
                </TodoColumn>

                <TodoColumn title="In Progress" id="inProgress">
                    {inProgressCards}
                </TodoColumn>

                <TodoColumn title="Completed" id="completed">
                    {completedCards}
                </TodoColumn>
            </BoardContainer>
        </DndContext>
    );
};

export default Board;
