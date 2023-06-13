import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const allBooks = () => {
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
    backgroundColor: "#A30000",
    fontSize: "12px",
    textAlign: "center",
    color: "#fff",
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
        <h1 style={h1}>Admin Panel - Manage Books</h1>
        <div className="table-responsive">
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={data}>SN</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tdata}>
                <td style={data}>1</td>
                <td>Harry Potter</td>
                <td>JK. Rowling</td>
                <td>
                  <div style={statusA}>Available</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Add</button>
                    <button style={button}>Update</button>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>2</td>
                <td>Harry Potter</td>
                <td>JK. Rowling</td>
                <td>
                  <div style={statusA}>Available</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Add</button>
                    <button style={button}>Update</button>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>3</td>
                <td>Harry Potter</td>
                <td>JK. Rowling</td>
                <td>
                  <div style={statusU}>Unavailable</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Add</button>
                    <button style={button}>Update</button>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>4</td>
                <td>Harry Potter</td>
                <td>JK. Rowling</td>
                <td>
                  <div style={statusU}>Unavailable</div>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Add</button>
                    <button style={button}>Update</button>
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

export default allBooks;
