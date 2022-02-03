import NewMeetupPage from "./NewMeetup";

function ALLMUPS(){
    function letsdo(data){
        console.log(data);
    }

    return <div >
            <NewMeetupPage text={letsdo} />
        </div>;

}

export default ALLMUPS;