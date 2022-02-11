import classes from './footer.module.css';
import { useEffect,useState } from 'react';

function Footer(props) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  
  useEffect(() => {
      window.addEventListener("resize", () => {
          const ismobile = window.innerWidth < 800;
          if (ismobile !== isMobile){
              setIsMobile(ismobile);
          }

      }, false);
  }, [isMobile]);

  
  return (
    <div className={classes.myfooter}>
     {isMobile? <address> for queries & reports |<a href="mailto:vinnuvinodkumar8080@gmail.com">&#9993; Contact</a>
      </address>: <address>
        Copyright &copy; 2022 |<a href="https://github.com/vinod9866/CDPC_MajorProject">Design and Development</a> . All Rights Reserved. | 
        <a href="mailto:vinnuvinodkumar8080@gmail.com">&#9993; Contact</a>
      </address> }
     
    </div>

  );
}
export default Footer;