import MainNavigation from './MainNavigation';
import classes from './layout.module.css';
import Footer from './footer';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    <Footer/>
    </div>
  );
}

export default Layout;