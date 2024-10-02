import Card from "./components/card";
import Cart from "./components/cart";
import { PRODUCTS_DATA } from "./lib/mockData";
import './App.css'

function App() {
  return (
    <>
      <div className="container max-lg mx-auto">
        <h1>React My Store App</h1>

        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2">
            <h2>Products</h2>
            <ul className="space-y-2">
              {PRODUCTS_DATA.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h2>Cart</h2>
            <Cart />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
