import MainNavigation from './MainNavigation';
import classes from './layout.module.css';
import Footer from './footer';
import { Container } from 'react-bootstrap';

function Layout(props) {
  return (
    <div>
      <div className={classes.fix}><MainNavigation/></div>

      <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center"  >
        <Container className={classes.container}>
            <main className={classes.main}>{props.children}</main>
        </Container>
      </div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default Layout;