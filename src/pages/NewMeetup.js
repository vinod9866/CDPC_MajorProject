import { useContext } from "react";
import AuthContext from '../store/auth-context';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];


function NewMeetupPage(props){

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.token;
  console.log(isLoggedIn);
    function user(){
      var a = 10;
      props.text(a);
    }
    return <div>
        {/* <h1>All meetups</h1>
        {DUMMY_DATA.map(meetup =>{
            return <li key={meetup.id}>{meetup.title}</li>
        })} */}

      <button onClick={user}>hello</button>
    </div>;
}

export default NewMeetupPage;