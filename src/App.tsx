import Card from "./components/Card";
import Cart from "./components/Cart";
import SimpleButton from "./components/SimpleButton";
import User from "./components/User";


// todo@timi fetch data api route get
// https://www.robinwieruch.de/next-server-actions-fetch-data/
import * as mockData from "./lib/mockData";

function App() {
  return (
    <>
      <div className="max-lg mx-auto">
        <h1 className="heading-primary">React Zustand My Store App</h1>

        <div>
          <SimpleButton />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <h2 className="heading-secondary">Products</h2>
            <ul className="space-y-2">
              {mockData.PRODUCTS_DATA.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h2 className="heading-secondary">Cart</h2>
            <Cart />
            <h2 className="heading-secondary mt-8">User</h2>
            <User />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
