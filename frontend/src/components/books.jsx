import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const books = () => {
  const h1 = {
    textAlign: "center",
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "bold",
  };
  
  const images = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  const button = {
    marginRight: "10px",
    backgroundColor: "#707672",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
  };

  const cardbackground = {
    backgroundColor: "#A4C4B5",
  };

  const info = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "Bold",
  };

  const infospan = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "Bold",
    color: "#ffff",
  };

  const container = {
    display: "flex",
    gap: "20px",
  };
  const statusA = {
    width: "80px",
    borderRadius: "20px",
    backgroundColor: "#355e3b",
    fontSize: "12px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "normal",
    padding:"3px"
  };
  const statusU = {
    width: "80px",
    borderRadius: "20px",
    backgroundColor: "#A30000",
    fontSize: "12px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "normal",
    padding:"3px"
  };

  const card = {
    width: "18rem",
    marginBottom: "20px",
  };

  return (
    <>
      <Navbar />
      <h1 style={h1}>All Books</h1>
      <div className="d-flex flex-wrap  justify-content-center my-3 mx-3" style={{ gap: "20px" }}>
        <div className="card" style={card}>
          <img
            src="./images/HP_4-scaled-e1656494430709.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Harry Potter <br />
              Writer: <span style={infospan}> J.k Rowling </span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/The-Art-of-War-by-Sun-Tzu-Book.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title:The Art of War <br />
              Writer: <span style={infospan}> Sun Tzu </span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/book-cover-subtle-art.png"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: The Subtle Art of Not Giving a Fuck <br />
              Writer: <span style={infospan}>Mark Manson</span> <br />
              <div style={{ display: "flex", gap: "10px" }}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/13richard-ford-cover-jumbo.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/09Kingsolver-cover-articleLarge.webp"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/81SBy9jbbHL.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/1003w-ooKN90UU-H0.webp"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/9781616208882.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/English_Harry_Potter_4_Epub_9781781105672.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/HP_4-scaled-e1656494430709.jpg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/images (1).jpeg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/images (2).jpeg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/images (5).jpeg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={card}>
          <img
            src="./images/images.jpeg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusA}>Available</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={card}>
          <img
            src="./images/images (4).jpeg"
            style={images}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={cardbackground}>
            <p className="card-text" style={info}>
              Book Title: Be Mine <br />
              Writer: <span style={infospan}>Richard Ford</span> <br />
              <div style={container}>
                Status: <div style={statusU}>Unavailable</div>
              </div>
            </p>
            <div className="d-flex justify-content-start">
              <a href="#" style={button} className="btn btn-primary">
                Borrow
              </a>
              <a href="#" style={button} className="btn btn-primary">
                Return
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default books;
