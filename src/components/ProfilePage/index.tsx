import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

function ProfilePage(){
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Alexsander Moura</h1>
        <h2>@alex_moura</h2>
        <p>Developer at <a href="#">@alex_moura</a></p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 32 de janeiro de 2075
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>296</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage;