import './App.css';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './themes/theme';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routingUtil } from './utils/routingUtils';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const ColorModeContext = React.createContext({
  mode: 'light',
  toggleColorMode: () => {}
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [mode],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path={routingUtil.routes.portfolio} element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export { ColorModeContext };
export default App;
