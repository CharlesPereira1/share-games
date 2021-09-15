import React from 'react';
import { ThemeProvider } from 'styled-components';

import SignIn from './src/screens/SignIn';

import theme from './src/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
};

export default App;
