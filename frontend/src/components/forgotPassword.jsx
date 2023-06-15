import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const forgotPassword = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  };
  const spanStyles = {
    fontFamily: "'Dancing Script', cursive",
    fontWeight: "bold",
    fontSize: "2rem"
  };
  const h5 = {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "1px",
    margin: "50px",
  };
  const colStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mainContainer ={
    margin: "150px auto"
  }
  
  return (
    <MDBContainer style={mainContainer}>
      <MDBCard style={{border:"none"}}>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="./images/book-gf66f35e9a_640.jpg"
              alt="login form"
              className="rounded-start w-100 h-100"
            />
          </MDBCol>

          <MDBCol md="6" style={colStyles}>
            <MDBCardBody
              className="d-flex flex-column h-39"
              style={{ backgroundColor: "#A4C4B5" }}
            >
              <div style={containerStyles}>
                <span className="h1" style={spanStyles}>
                  Arbyte E-Library
                </span>
              </div>

              <h5 className="fw-normal pb-3 text-center" style={h5}>
                Forgot Password?
              </h5>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="email"
                  style={{
                    marginBottom: "5px",
                    marginLeft: "150px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Email address
                </label>
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "2px solid #707672",
                    width: "300px",
                    margin: "auto",
                  }}
                />
              </div>
              <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                style={{
                  backgroundColor: "#696969",
                  border: "none",
                  width: "250px",
                  margin: "auto",
                  borderRadius: "30px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                }}
              >
                Send Reset Code
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default forgotPassword;
