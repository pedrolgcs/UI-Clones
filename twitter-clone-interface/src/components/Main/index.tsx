import React from 'react';
import Switch from 'react-switch';

// styles
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

// components
import ProfilePage from '../ProfilePage';

// context
import { useTheme } from '../../hooks/theme';

const Main: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong> Pedro H. </strong>
          <span>126 Tweets</span>
        </ProfileInfo>
        <Switch
          onChange={toggleTheme}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={theme.colors.twitter}
          offColor={theme.colors.text}
        />
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
