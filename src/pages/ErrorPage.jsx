import NotFoundImage from '../assets/icons/not-found.svg';
import {
  StyledTitle,
  StyledMain,
  StyledContent,
  StyledHeader,
} from '../components/styles/ErrorPage.styled';
import { Container, Button } from '../components/ExportComponents';

const ErrorPage = () => {
  return (
    <StyledMain>
      <Container className="small">
        <StyledHeader>
          <img className="error-image" src={NotFoundImage} alt="0" />
        </StyledHeader>
        <StyledContent>
          <StyledTitle>404 Page Not Found</StyledTitle>
          <p>
            Looks like you got lost, the page that you are looking for does not
            exist, please check the URL and try again - else just return home.
          </p>
          <Button className="btn-primary" to="/">
            Drive Home
          </Button>
        </StyledContent>
      </Container>
    </StyledMain>
  );
};

export default ErrorPage;
