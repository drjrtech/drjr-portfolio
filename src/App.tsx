import './App.css';
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <header className="App-header">
          <h3>drjr website</h3>
          <Button color='primary' variant='contained'>Example</Button>
          <Typography variant="body2" color="primary.light">Example light</Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}


export default App;
