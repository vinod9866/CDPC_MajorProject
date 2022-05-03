import MainNavigation from './MainNavigation';
import classes from './layout.module.css';
import Footer from './footer';
import { Container } from 'react-bootstrap';
import { Toast, ToastContainer } from "react-bootstrap";
import { useState,useEffect, useContext } from 'react';
import event from 'sockjs-client/lib/utils/event';

function Layout(props) {
  const [shows, setShows] = useState(false);
  const [showe, setShowe] = useState(false);
  window.addEventListener('offline',(event)=>{
    setShowe(true);
    setShows(false);
  });
  window.addEventListener('online',(event)=>{
    setShows(true);
    setShowe(false)
  });
  return (
    <div>
      <div className={classes.fix}><MainNavigation/></div>

      <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center"  >
        <Container className={classes.container}>
        <ToastContainer className="p-3 position-fixed bottom-1 end-0 p-3" style={{zIndex:'11'}}>
              <Toast className="bg-success text-light" onClose={() => setShows(false)} show={shows} delay={5000} autohide>
              <Toast.Body className="text-start">Network connection restored.</Toast.Body>
          </Toast>
          <Toast className="bg-danger text-light" onClose={() => setShowe(false)} show={showe} delay={5000} autohide>
            <Toast.Body className="text-start">Please check your internet connection.</Toast.Body>
          </Toast>
        </ToastContainer>
            <main className={classes.main}>{props.children}</main>
        </Container>
      </div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default Layout;