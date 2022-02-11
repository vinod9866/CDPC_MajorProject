import Card from "../ui/card";
import Table from "./table";
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


function TableData(){

    return <Card> <div>
        <h1>Table Data</h1>
        {DUMMY_DATA.map(meetup =>
          <Table text="vinod" key={meetup.id} id={meetup.id} title={meetup.title} 
          image={meetup.image} address={meetup.address} 
          desc={meetup.description}  />
        )}

    </div></Card>;
}

export default TableData;