import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Todo } from '../types';

const TaskForm = ({ onFinish, users }: { onFinish: (values: any) => void; users: Todo['user'][] }) => (
    <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        style={{ width: '100%' }}
    >
        <Form.Item
            label="User"
            name="user"
            rules={[{ required: true, message: 'Please select a user!' }]}
            style={{ marginBottom: '1.5rem' }}
        >
            <Select style={{ height: 50 }}>
                {users?.map((user) => (
                    <Select.Option key={user.id} value={user.id}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <img
                                src={user.profileUrl}
                                alt=""
                                style={{ width: '40px', height: '40px', marginRight: '2rem' }}
                            />
                            {user.name}
                        </div>
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
        <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input a title!' }]}
            style={{ marginBottom: '1.5rem' }}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input a description!' }]}
            style={{ marginBottom: '1.5rem' }}
        >
            <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);

export default TaskForm;
