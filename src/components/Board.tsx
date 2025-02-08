import styled from 'styled-components';
import { Status, Todo } from '../types';
import TodoColumn from './Column';

const BoardContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 24px;
    min-height: 100vh;
    background-color: #1a1a1a;
`;

const Board = ({ todos }: { todos: Todo[] }) => {
    const columns: Status[] = ['backlog', 'inProgress', 'completed'];

    return (
        <BoardContainer>
            <TodoColumn title="Backlog" id="backlog">
                CArds
            </TodoColumn>

            <TodoColumn title="In Progress" id="inProgress">
                CArds
            </TodoColumn>

            <TodoColumn title="Completed" id="completed">
                CArds
            </TodoColumn>
        </BoardContainer>
    );
};

export default Board;
