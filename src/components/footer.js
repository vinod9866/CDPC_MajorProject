import classes from './footer.module.css';

function Footer(props) {
  return (
    <div className={classes.myfooter}>
      <address>
        Copyright &copy; 2022 |<a href="https://github.com/vinod9866/CDPC_MajorProject">Design and Development</a> . All Rights Reserved. | 
        <a href="mailto:vinnuvinodkumar8080@gmail.com">&#9993; Contact</a>
      </address> 

    </div>

  );
}
export default Footer;