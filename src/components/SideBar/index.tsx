import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

function SideBar () {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Seu Madruga"
                nickname="@madruguinha"
              />,
              <FollowSuggestion
                name="Chaves"
                nickname="@chaves_do_8"
              />,
              <FollowSuggestion
                name="Quico"
                nickname="@Tesouro"
              />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;