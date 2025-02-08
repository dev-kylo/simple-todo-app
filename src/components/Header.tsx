import { Button } from 'antd';
import React from 'react';

const Header = ({ openSideBar }: { openSideBar: () => void }) => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '2em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: '25px', marginBottom: '15px' }}>Simple Todo App</h1>
            <p style={{ fontSize: '19px' }}>Add as many to-dos as your heart desires ❤️</p>
            <Button type="primary" onClick={openSideBar}>
                {' '}
                Add ToDo
            </Button>
        </header>
    );
};

export default Header;
