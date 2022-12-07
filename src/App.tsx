import React from 'react';
import {AuthProvider} from './context/Auth';
import {Routes} from './routes';

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
