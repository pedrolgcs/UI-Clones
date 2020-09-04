import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import { Container, Wrapper } from './styles';
import GlobalStyle from '../../styles/GlobalStyles';

// components
import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

// context
import { useTheme } from '../../hooks/theme';

const Layout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Wrapper>
          <MenuBar />
          <Main />
          <SideBar />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
