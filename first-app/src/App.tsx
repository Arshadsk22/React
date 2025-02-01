import Vehicles from './components/Cars'
import './App.css'

function App() {
  const jdmCars = [
    'Nissan Skyline GT-R R34',
    'Toyota Supra',
    'Mazda RX-7',
    'Honda NSX',
    'Subaru Impreza WRX STI'
  ];
  const superBikes = [
    'Ducati Panigale V4',
    'Yamaha R1',
    'Kawasaki Ninja H2',
    'BMW S1000RR',
    'Suzuki GSX-R1000'
  ];
  return (
    <div className='app'>
      <>
        <Vehicles items={jdmCars} title={'List of cars'} />
        <Vehicles items={superBikes} title={'List of bikes'} />
      </>
    </div>
  )
}

export default App
