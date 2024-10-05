import Card from "./components/Card";
import Cart from "./components/Cart";
import { PRODUCTS_DATA } from "./lib/mockData";

function App() {
  return (
    <>
      <div className="max-lg mx-auto">
        <h1>React My Store App</h1>

        <div className="grid grid-cols-4 gap-4">
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
