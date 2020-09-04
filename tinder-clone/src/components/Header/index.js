import React from 'react';
import { Person, Forum } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

// styles
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <IconButton>
        <Person fontSize="large" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />
      <IconButton>
        <Forum fontSize="large" />
      </IconButton>
    </Container>
  );
}

export default Header;
