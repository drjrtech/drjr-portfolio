import React from 'react';
import { Container, Typography } from '@mui/material';
import { Reveal } from '../utils/Reveal';

const Landing: React.FC = () => {
  return (
    <Reveal>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '100vh'
        }}
      >
        <Typography variant="h2" sx={{ marginTop: '-6rem' }}>
            Landing
        </Typography>
      </Container>
    </Reveal>
  );
};

export default Landing;
