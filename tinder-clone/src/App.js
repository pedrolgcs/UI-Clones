import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import Routes from './routes';

// components
import Header from './components/Header';

// styles
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        {/* Tinder Card */}
        {/* Buttons below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}
      </BrowserRouter>
    </>
  );
}

export default App;
