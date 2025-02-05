import Vehicles from './components/Cars';
import Counter from './components/Count';
import Name from './components/Name';
import Toggle from './components/Toggle';
import Profile from './components/Profile';
import './App.css';
import ArticleList from './components/ArticleList';
import ToggleImage from './components/ImageToggle';
import Greetings from './components/Greetings';
import UserList from './components/UserList';

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
      <Name /> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <Profile /> */}
      {/* <Greetings>hello</Greetings> */}
      {/* <ToggleImage /> */}
      {/* <ArticleList /> */}
      <UserList />
    </div>
  );
}

export default App;