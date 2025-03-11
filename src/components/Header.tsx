import { styled } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <h1>Scavenger Hunt</h1>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled('header')(() => ({
    backgroundColor: '#007bff',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',
    '& h1': {
        margin: 0,
    },
}));