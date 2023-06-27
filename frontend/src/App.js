import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Books from "./components/Books";
import AddBooks from "./components/AddBooks";
import AllBooks from "./components/AllBooks";
import Home from "./components/Pages/home";
import AllUsers from "./components/AllUsers";
import ForgotPasswod from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import AddReviews from "./components/AddReviews";
import AllReviews from "./components/AllReviews";
import SendOtp from "./components/SendOtp";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/allUsers" element={<AllUsers/>} />
        <Route path="/forgotPassword" element ={<ForgotPasswod/>}/>
        <Route path="/resetPassword" element ={<ResetPassword/>}/>
        <Route path="/addReviews" element ={<AddReviews/>}/>
        <Route path="/allReviews" element={<AllReviews/>} />
        <Route path="/sendOtp" element={<SendOtp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
