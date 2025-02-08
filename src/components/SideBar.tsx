import React, { useState } from 'react';
import { App, Button, Drawer } from 'antd';

const SideBar = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
    return (
        <Drawer title="Add To Do" onClose={onClose} open={open} width={400}>
            {children}
        </Drawer>
    );
};

export default SideBar;
