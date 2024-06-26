import React from 'react';
import { Container } from '@mui/material';
import { Reveal } from '../utils/Reveal';

const SectionExample: React.FC = () => {
  return (
    <Reveal>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          paddingTop: '8rem',
          height: '100vh'
        }}
      >
          <div>SectionExample</div>
      </Container>
    </Reveal>
  );
};

export default SectionExample;
