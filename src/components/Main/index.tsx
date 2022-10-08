import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  NotificationIcon,
  EmailIcon
} from './styles'

function Main(){
  return(
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Alexsander</strong>
          <span>613 tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <NotificationIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main;