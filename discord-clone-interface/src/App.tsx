import React from 'react';

// styles
import GlobalStyles from './styles/GlobalStyles';

// components
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout />
    </>
  );
};

export default App;
