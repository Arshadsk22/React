import AdvanceProducts from './components/AdvanceProducts'
import fetchProducts from './Services/products'
function App() {

  return (
    <>
      {/* <Products /> */}
      <AdvanceProducts product={fetchProducts()} />
    </>
  )
}

export default App
