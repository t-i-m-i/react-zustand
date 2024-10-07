import Card from "./components/Card";
import Cart from "./components/Cart";
import SimpleButton from "./components/SimpleButton";
import User from "./components/User";
import { PRODUCTS_DATA } from "./lib/mockData";

function App() {
  return (
    <>
      <div className="max-lg mx-auto">
        <h1>React My Store App</h1>

        <div>
          <SimpleButton />
        </div>

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
            <h2 className="mt-8">User</h2>
            <User />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
