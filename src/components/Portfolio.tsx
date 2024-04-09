import React from 'react';
import { Container } from '@mui/material';

const Portfolio: React.FC = () => {
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
        <div>Portfolio</div>
    </Container>
  );
};

export default Portfolio;
