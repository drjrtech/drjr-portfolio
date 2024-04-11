import React from 'react';
import { Container } from '@mui/material';
import SectionExample from './SectionExample';
import About from './About';
import Landing from './Landing';

const Home: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column'
      }}
    >
        <Landing />
        <About />
        <SectionExample />
        <SectionExample />
        <SectionExample />
    </Container>
  );
};

export default Home;
