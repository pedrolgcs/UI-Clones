import React from 'react';

// contexts
import AppProvider from './hooks';

// components
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
};

export default App;
