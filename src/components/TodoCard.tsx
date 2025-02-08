import { Card } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid #cecece;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 2rem;
`;

const TodoCard = ({ title, description, profileUrl }: { title: string; description: string; profileUrl: string }) => {
    return (
        <Container>
            <Card title={title} extra={<img src={profileUrl} alt="" style={{ width: 50, height: 50 }} />}>
                {description}
            </Card>
        </Container>
    );
};

export default TodoCard;
