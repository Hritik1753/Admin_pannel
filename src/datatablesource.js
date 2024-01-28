export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "sumant",
      img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/82511265_470808153813545_2099405646649622528_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_ohc=q7Vp0UOR2FYAX9S9SNq&_nc_ht=scontent.fdel29-1.fna&oh=00_AfDip2vGT3NaL93CRQJ4YD7AeABq1aXFMht9NX6L6pPK_w&oe=65DDABB4",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "amit",
      img: "https://www.pinkvilla.com/pics/350x500/1843047000_hrithik-roshan-l_202312.jpg",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "katrina",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "emma",
      img: "https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "nandini",
      img: "https://www.unwomen.org/sites/default/files/2022-10/UN-Women-Goodwill-Ambassador-Emma-Watson-Credit-Celeste-Sloman-853x1280.jpg",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "shivani",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "diamond",
      img: "https://www.pinkvilla.com/pics/350x500/1843047000_hrithik-roshan-l_202312.jpg",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "dinesh",
      img: "https://www.pinkvilla.com/pics/350x500/1843047000_hrithik-roshan-l_202312.jpg",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "rohit",
      img: "https://www.pinkvilla.com/pics/350x500/1843047000_hrithik-roshan-l_202312.jpg",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "ananya",
      img: "https://assets.teenvogue.com/photos/616d8bb91ae6a496cd25b7b3/16:9/w_2560%2Cc_limit/1347144379",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
    },
  ];