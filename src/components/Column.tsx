import styled from 'styled-components';
import { useDroppable } from '@dnd-kit/core';
import { Status } from '../types';

const Column = styled.div`
import { Status } from '../types';
    background-color: #2d2d2d;
    border-radius: 8px;
    min-width: 300px;
    flex: 1;
    padding: 16px;
`;

const ColumnTitle = styled.h2`
    color: #ffffff;
    font-size: 1.2rem;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #404040;
`;

const TodoColumn = ({ title, children, id }: { title: string; children: React.ReactNode; id: Status }) => {
    const { isOver, setNodeRef } = useDroppable({
        id,
    });
    const style = {
        backgroundColor: isOver ? 'green' : undefined,
    };
    return (
        <Column id={id} ref={setNodeRef} style={style}>
            <ColumnTitle>{title}</ColumnTitle>
            {children}
        </Column>
    );
};

export default TodoColumn;
