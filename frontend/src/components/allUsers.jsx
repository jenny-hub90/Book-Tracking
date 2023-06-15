import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const allUsers = () => {
  const h1 = {
    textAlign: "center",
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "bold",
  };
  const table = {
    fontFamily: "'Poppins', sans-serif",
    padding: "0.5rem 0.5rem",
    width: "100%",
  };

  const thead = {
    backgroundColor: "#707672",
    color: "#fff",
    padding: "10px",
  };

  const tdata = {
    backgroundColor: "#A4C4B5",
    padding: "10px",
  };

  const data = {
    padding: "10px",
  };

  const statusA = {
    width: "80px",
    borderRadius: "20px",
    backgroundColor: "#355e3b",
    fontSize: "12px",
    textAlign: "center",
    color: "#fff",
  };

  const statusU = {
    width: "80px",
    borderRadius: "20px",
    backgroundColor: "#ffdf00",
    fontSize: "12px",
    textAlign: "center",
    color: "#000",
  };

  const buttonContainer = {
    display: "flex",
    gap: "10px",
    fontSize: "12px",
  };
  const button = {
    borderRadius: "20px",
    width: "70px",
    border: "none",
    backgroundColor: "#707672",
    color: "#fff",
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 style={h1}>Admin Panel - All Users</h1>
        <div className="table-responsive">
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={data}>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Emailaddress</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tdata}>
                <td style={data}>Jenny</td>
                <td>Rajak</td>
                <td>Jen10</td>
                <td>jumbledjenny19@gmail.com</td>
                <td>
                  <div style={statusA}>Active</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny</td>
                <td>Rajak</td>
                <td>Jen10</td>
                <td>jumbledjenny19@gmail.com</td>
                <td>
                  <div style={statusU}>Idle</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny</td>
                <td>Rajak</td>
                <td>Jen10</td>
                <td>jumbledjenny19@gmail.com</td>
                <td>
                  <div style={statusA}>Active</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny</td>
                <td>Rajak</td>
                <td>Jen10</td>
                <td>jumbledjenny19@gmail.com</td>
                <td>
                  <div style={statusU}>Idle</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allUsers;
