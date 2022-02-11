import NewMeetupPage from "./tableData";

function ALLMUPS(){
    function letsdo(data){
        console.log(data);
    }

    return <div >
            <NewMeetupPage text={letsdo} />
        </div>;

}

export default ALLMUPS;