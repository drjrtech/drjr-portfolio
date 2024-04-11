import React from 'react';
import { Container, Typography } from '@mui/material';
import { Reveal } from '../utils/Reveal';
import image from '../assets/arms.jpg';

const About: React.FC = () => {

  const exampleText = "Nullam ut luctus neque, ut consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut luctus neque, ut consequat ipsum."
  
  return (
    <Reveal width='100%'>
        <Container maxWidth={false} sx={{ height: '100vh', backgroundColor: 'background.paper' }} id="about-section">
            <Container sx={{ paddingTop: '4rem' }}>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="body1">Full stack developers and long life friends</Typography>
            </Container>
            <Container
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                paddingTop: '4rem',
                }}
            >
            <div style={{ width: 'calc(50% - 4rem)', paddingRight: '2rem' }}>
                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    {exampleText}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', paddingTop: '1rem' }}>
                    {exampleText}{exampleText}
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', paddingTop: '1rem' }}>
                    {exampleText}
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'left', paddingTop: '1rem' }}>
                    Web Technologies
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    React, HTML, CSS, JavaScript, TypeScript
                </Typography>
            </div>
            <div style={{ width: 'calc(50% - 4rem)', paddingLeft: '2rem' }}>
                <img src={image} alt="Arms" style={{ width: '100%', height: 'auto' }} />
            </div>
        </Container>
      </Container>
    </Reveal>
  );
};

export default About;
