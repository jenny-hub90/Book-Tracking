import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Books from "./components/books";
import AddBooks from "./components/addBooks";
import AllBooks from "./components/allBooks";
import Home from "./components/Pages/home"


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
