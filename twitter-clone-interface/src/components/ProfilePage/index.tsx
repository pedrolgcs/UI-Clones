import React from 'react';

// styles
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

// components
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Pedro Henrique</h1>
        <h2>@galaaz</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon /> Acari, Brasil.
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de outubro 1992.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>627 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
