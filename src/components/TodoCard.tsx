import { Card } from 'antd';
import styled from 'styled-components';
import { useDraggable } from '@dnd-kit/core';

const Container = styled.div`
    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2rem;
`;

const TodoCard = ({
    title,
    description,
    profileUrl,
    id,
}: {
    title: string;
    description: string;
    profileUrl: string;
    id: string;
}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });
    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <Container ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Card title={title} extra={<img src={profileUrl} alt="" style={{ width: 50, height: 50 }} />}>
                {description}
            </Card>
        </Container>
    );
};

export default TodoCard;
