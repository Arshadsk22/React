import './App.css'
import AddCourses from "./components/AddCourses";
import Courses from "./components/Courses";
import HomePage from "./components/Home";
import LoginStatus from "./components/LoginStatus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <header>
        <h1>React Demos</h1>
      </header>
      <Router>
        <Link to="/courses" className="btn btn-outline-success">
         Courses
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/add-courses" element={<AddCourses />}></Route>
        </Routes>
      </ Router>
    </div>
  )
}

export default App
