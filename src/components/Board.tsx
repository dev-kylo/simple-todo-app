import styled from 'styled-components';
import { useMemo } from 'react';
import { Status, Todo } from '../types';
import TodoColumn from './Column';
import TodoCard from './TodoCard';

const BoardContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 24px;
    min-height: 100vh;
    background-color: #1a1a1a;
`;

const Board = ({
    backlogData,
    inProgressData,
    completedData,
}: {
    backlogData: Todo[];
    inProgressData: Todo[];
    completedData: Todo[];
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
    return (
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
    );
};

export default Board;
