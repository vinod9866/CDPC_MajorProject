import ProgressBar from 'react-bootstrap/ProgressBar';

function DriveStatus(){
    return(
        // <div className="row">
        //     <div className="col-0"></div>
        //     <div className="col-12">
        //     </div>
        //     <div className="col-0"></div>
        // </div>
        <div>
            <ProgressBar>
  <ProgressBar striped variant="success" now={35} key={1} />
  <ProgressBar variant="warning" now={20} key={2} />
  <ProgressBar striped variant="danger" now={10} key={3} />
</ProgressBar>
        </div>
    );
}
export default DriveStatus;