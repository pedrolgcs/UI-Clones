import React from 'react';

// styles
import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Pedro H." />

      <Role>Offline - 3</Role>
      <UserRow nickname="Pedro H." isBot />
      <UserRow nickname="Aladin" />
      <UserRow nickname="Jana" />
    </Container>
  );
};

export default UserList;

