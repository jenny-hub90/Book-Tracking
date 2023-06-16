import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Books from "./components/books";
import AddBooks from "./components/addBooks";
import AllBooks from "./components/allBooks";
import Home from "./components/Pages/home";
import AllUsers from "./components/allUsers";
import ForgotPasswod from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";
import AddReviews from "./components/addReviews";
import AllReviews from "./components/allReviews";


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
