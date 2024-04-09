import React from 'react';
import { Container } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '8rem'
      }}
    >
        <div>Home</div>
    </Container>
  );
};

export default Home;
