import React, { useState, useMemo } from 'react';
import { PaletteMode } from '@mui/material';

function useColorMode(initialMode: PaletteMode = 'light') {
  const [mode, setMode] = useState<PaletteMode>(initialMode);

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return useMemo(() => ({
    mode,
    toggleColorMode
  }), [mode]);
}

// Usage example:
function App() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <div>
      <button onClick={toggleColorMode}>Toggle Color Mode</button>
      <div>
        Current Mode: {mode}
      </div>
    </div>
  );
}

export default App;
