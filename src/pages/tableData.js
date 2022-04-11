import Table from "./table";
import { useState,useEffect } from 'react';
import { getDrives } from "../apis";
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

  const [driveData,setDriveData] = useState([])

  useEffect(()=>{
    getDrives()
    .then(res=>res.json()
    .then(data=>setDriveData(data))
    )
  },[])
  return (
    // <Card>
    //   {" "}
      <div>
        {driveData.map((data) => (
          <Table
            text="vinod"
            key={data.id}
            id={data.id}
            stat="Expired"
            branches={data.eligibilityData.branches}
            last_date={data.lastOfApply}
            title={data.name}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            address={data.location}
            desc={data.desc}
          />
        ))}
      </div>
  );
}

export default TableData;
