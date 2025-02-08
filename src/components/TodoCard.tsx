import { Card } from 'antd';

const TodoCard = ({ title, description, profileUrl }: { title: string; description: string; profileUrl: string }) => {
    return (
        <Card title={title} extra={<img src={profileUrl} alt="" />} style={{ width: 300 }}>
            {description}
        </Card>
    );
};

export default TodoCard;
