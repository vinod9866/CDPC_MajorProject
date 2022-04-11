import Table from "./table";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "Google(Software Engineer)",
    branches: ['CSE','ECE','CE'],
    last_date: '11-04-2022',
    status: "Active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Napier Health Care(Analyst)",
    branches: ['CSE','ECE','CE','ME'],
    last_date: '11-04-2022',
    status: "Expired",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "Google(Software Engineer)",
    branches: ['CSE','ECE','CE'],
    last_date: '11-04-2022',
    status: "Active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "Napier Health Care(Analyst)",
    branches: ['CSE','ECE','CE','ME'],
    last_date: '11-04-2022',
    status: "Expired",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m5",
    title: "Google(Software Engineer)",
    branches: ['CSE','ECE','CE'],
    last_date: '11-04-2022',
    status: "Active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m6",
    title: "Napier Health Care(Analyst)",
    branches: ['CSE','ECE','CE','ME'],
    last_date: '11-04-2022',
    status: "Expired",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function TableData() { 

  return (
    // <Card>
    //   {" "}
      <div>
        {DUMMY_DATA.map((meetup) => (
          <Table
            text="vinod"
            key={meetup.id}
            id={meetup.id}
            stat={meetup.status}
            branches={meetup.branches}
            last_date={meetup.last_date}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
            desc={meetup.description}
          />
        ))}
      </div>
  );
}

export default TableData;
