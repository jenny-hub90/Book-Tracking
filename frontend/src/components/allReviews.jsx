import {useState,useEffect} from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";


const AllReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        
        const response = await axios.get('http://localhost:8000/view/reviews');  
        setReviews(response.data);
      } catch (error) {
       
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);


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

  const Images = {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "50%",
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 style={h1}>Admin Panel - All Reviews</h1>
        <div className="table-responsive">
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={data}>Fullname</th>
                <th>Image</th>
                <th>Feedback</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tdata}>
                <td style={data}>Jenny Rajak</td>
                <td>
                  <img src="./images/image1.webp" alt="" style={Images} />
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem, necessitatibus.
                  </p>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny Rajak</td>
                <td>
                  <img src="./images/image2.webp" alt="" style={Images}  />
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem, necessitatibus.
                  </p>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny Rajak</td>
                <td>
                  <img src="./images/image3.jpeg" alt="" style={Images}  />
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem, necessitatibus.
                  </p>
                </td>
                <td>
                  <div style={buttonContainer}>
                    <button style={button}>Delete</button>
                  </div>
                </td>
              </tr>
              <tr style={tdata}>
                <td style={data}>Jenny Rajak</td>
                <td>
                  <img src="./images/image4.webp" alt="" style={Images} />
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem, necessitatibus.
                  </p>
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

export default AllReview;
