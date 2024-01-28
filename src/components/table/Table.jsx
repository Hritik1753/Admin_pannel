import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://www.pinkvilla.com/pics/350x500/1843047000_hrithik-roshan-l_202312.jpg",
      customer: "Hritik",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais",
      customer: "sneha",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais",
      customer: "roshni",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais",
      customer: "shivani",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais",
      customer: "Anusha",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
      },
    
      {
        id: 2789123,
      product: "ASUS ROG Strix",
      img: "https://media.licdn.com/dms/image/D4D03AQEgjHH3TsvWhQ/profile-displayphoto-shrink_800_800/0/1699725247520?e=1712188800&v=beta&t=mVrTYxdT-zFy3s0qYgWfcRgW6Cdvy3Mr5Jwe-7ecTgU",
      customer: "Hritik Paswan",
      date: "1 March",
      amount: 10000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;