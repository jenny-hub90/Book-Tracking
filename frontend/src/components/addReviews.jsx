import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import axios from "axios";

const AddReview = () => {
  
  const [fullname, setFullname] = useState(''); 
  const [feedback, setFeedback] = useState(''); 
  const [image, setImage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData ={
      fullname,
      feedback,
    };

    try{
      const response = await axios.post('http://localhost:8000/add/reviews', reviewData);
      console.log(response.data);

      setFullname('');
      setFeedback('');

    }catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const upload = async e=>{
    try{
        const formData = new FormData();
        formData.append("file", image);
        const res = await axios.post(" http://localhost:8000/upload", formData)
        return res.data;
    }catch(err){
        console.log(err);
    }
  }
  const button = {
    backgroundColor: "#707672",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    margin: "10px",
  };
  const card = {
    backgroundColor: "#A4C4B5",
    width: "70%",
    margin: "auto",
    marginTop: "50px",
    marginBottom: "50px",
  };

  const h1 = {
    fontFamily: "'Dancing Script', cursive",
    textAlign: "center",
    marginTop: "40px",
  };

  const h2 = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    letterSpacing: "1px",
    fontSize: "25px",
  };

  const labelContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const label = {
    marginBottom: "5px",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  };
  
  const inputStyle = {
    background: "none",
    border: "none",
    borderBottom: "2px solid #707672",
    width: "300px",
    margin: "auto",
    textAlign: "center",
  };



  return (
    <>
      <Navbar />
      <div style={card}>
        <h1 style={h1}>Reviews</h1>
        <h2 style={h2}>Add Review</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3" style={labelContainer}>
            <label for="exampleInputEmail1" class="form-label" style={label}>
              Fullname
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={inputStyle}
            />
          </div>
          <div class="mb-3" style={labelContainer}>
            <label for="exampleInputPassword1" class="form-label" style={label}>
              Yourfeedback
            </label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              style={inputStyle}
            />
          </div>
          <div class="mb-3" style={labelContainer}>
            <label for="img" class="form-label" style={label}>
              Yourimage
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              style={{ marginLeft: "50px" }}
            />
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary" style={button}>
              Add
            </button>
            <button type="submit" class="btn btn-primary" style={button}>
              Update
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddReview;
