import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Vehicles from './components/Cars';
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
        <header>
          <h1>React Demos</h1>
        </header>

        <nav>
          <Link to="/">Home</Link> | <Link to="/Recipes">Recipes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
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