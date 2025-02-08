import { Button } from 'antd';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 20px 0;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Subtitle = styled.p`
    font-size: 19px;
    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 1rem;
    }
`;

const Header = ({ openSideBar }: { openSideBar: () => void }) => {
    return (
        <StyledHeader>
            <Title>Simple Todo App</Title>
            <Subtitle>Add as many to-dos as your heart desires ❤️</Subtitle>
            <Button type="primary" onClick={openSideBar}>
                Add ToDo
            </Button>
        </StyledHeader>
    );
};

export default Header;
