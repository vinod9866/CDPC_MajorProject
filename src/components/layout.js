import MainNavigation from './MainNavigation';
import classes from './layout.module.css';
import Footer from './footer';
import { Container } from 'react-bootstrap';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Container className={classes.container}>
          <main className={classes.main}>{props.children}</main>
      </Container>
      <Footer/>
    </div>
  );
}

export default Layout;