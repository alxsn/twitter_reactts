import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

function Tweet(){
  return(
    <Container>
      <Retweeted>Voce retweetou</Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Alexsander Moura</strong>
            <span>@alex_moura</span>
            <Dot />
            <time>19 de jun</time>
          </Header>

          <Description>Foguete</Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              992
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;