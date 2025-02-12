import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CarList from "./Components/CarList";
import AddCar from './Components/AddCar';
import EditCar from './Components/EditCar';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Link to="/addCar" className="btn btn-success m-2">Add Car</Link>
          <Link to="/" className="btn btn-info">Car list</Link>
        </div>
        <Routes>
          <Route path='/' element={<CarList />} />
          <Route path='/addCar' element={<AddCar />} />
          <Route path='/editCar/:id' element={<EditCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;