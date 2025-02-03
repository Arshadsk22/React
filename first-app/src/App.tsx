import Vehicles from './components/Cars';
import Counter from './components/Count';
import Name from './components/Name';
import Toggle from './components/Toggle';
import Profile from './components/Profile';
import './App.css';
import ToggleImage from './components/ImageToggle';

function App() {
  const jdmCars = [
    'Nissan Skyline GT-R R34',
    'Toyota Supra',
    'Mazda RX-7',
    'Honda NSX',
  ];

  return (
    <div className="container">
      {/* <Vehicles items={jdmCars} title="JDM Cars" />
      <Counter />
      <Name /> */}
      {/* <Toggle /> */}
      {/* <Profile /> */}
      <ToggleImage />
    </div>
  );
}

export default App;