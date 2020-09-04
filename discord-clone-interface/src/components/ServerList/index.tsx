import React from 'react';

// styles
import { Container, Separator } from './styles';

// components
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
    </Container>
  );
};

export default ServerList;
