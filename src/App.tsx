import './App.css';
import { Button, CssBaseline, PaletteMode, ThemeProvider, Typography, createTheme } from '@mui/material';
import { getDesignTokens } from './themes/theme';
import React from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className="App">
          <header className="App-header">
            <h3>drjr website</h3>
            <Button color='primary' onClick={colorMode.toggleColorMode} variant='contained'>Example</Button>
            <Typography variant="body2" color="primary">Example</Typography>
            <main>Example</main>
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
