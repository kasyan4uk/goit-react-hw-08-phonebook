import { useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from 'redux/auth/authSelectors';
import { Container, StyledLink, Text } from './HomePage.styled';

function HomePage() {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  return isAuth ? (
    <Container>
      <Text>Hi, {user.name}!</Text>
      <Text>
        Go to yours{' '}
        <StyledLink to="/contacts">contacts</StyledLink>.
      </Text>
    </Container>
  ) : (
    <Container>
      <Text>Welcome to you phonebook!</Text>
      <Text>
        Please <StyledLink to="/login">login</StyledLink> or{' '}
        <StyledLink to="/register">register</StyledLink>
      </Text>
    </Container>
  );
}

export default HomePage;
