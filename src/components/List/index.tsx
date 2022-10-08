import {Container, Item, Title} from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

function List ({title, elements} : Props) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}

export default List;