import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Vehicles from './components/Cars';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './components/About'
import Home from './components/Home'
import Counter from './components/Count';
import Name from './components/Name';
import Toggle from './components/Toggle';
import Profile from './components/Profile';
import './App.css';
import ArticleList from './components/ArticleList';
import ToggleImage from './components/ImageToggle';
import Greetings from './components/Greetings';
import UserList from './components/UserList';
import RecipeList from './components/Recipes';
import Recipes from "./components/Recipes";

function App() {
  const jdmCars = [
    'Nissan Skyline GT-R R34',
    'Toyota Supra',
    'Mazda RX-7',
    'Honda NSX',
  ];

  return (
    <div className="container">
      <Router>
        <header className="m3-5">
          <h1>React Demos</h1>
        </header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Count">Counter</Link></li>
                    <li><Link className="dropdown-item" to="/Recipes">Recipes</Link></li>
                    <li><Link className="dropdown-item" to="/ArticleList">ArticleList</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Link to="/Home" className="btn btn-primary me-2">Home</Link>
          <Link to="/About" className="btn btn-secondary me-2">About</Link>
          <Link to="/Count" className="btn btn-success me-2">Counter</Link>
          <Link to="/ArticleList" className="btn btn-danger me-2">ArticleList</Link>
          <Link to="/Recipes" className="btn btn-warning me-2">Recipes</Link>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Count" element={<Counter />}></Route>
          <Route path="/ArticleList" element={<ArticleList />}></Route>
          <Route path="/Recipes" element={<Recipes />}></Route>
        </Routes>
      </Router>
      {/* <Vehicles items={jdmCars} title="JDM Cars" />
      <Name /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <Profile /> */}
      {/* <Greetings>hello</Greetings> */}
      {/* <ToggleImage /> */}
      {/* <ArticleList /> */}
      {/* <UserList /> */}
      {/* <RecipeList /> */}

    </div>
  );
}

export default App;