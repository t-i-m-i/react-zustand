import { useState } from "react";
import { useStore } from "../store/store";
import ChangeQtyButtons from "./ChangeQtyButtons";

export default function Cart() {

  const cart = useStore();
  const [showJson, toggleShowJson] = useState(false);
  
  return (
    <>
      <div className="py-2 text-xs">
        json: {' '}
        <span className="px-2 py-1 bg-green-700 text-white rounded cursor-pointer" onClick={() => toggleShowJson(prev => !prev)}>toggle</span>
        {showJson && <pre>
          {JSON.stringify(cart, null, 2)}
        </pre>}
      </div>

      <table className="table-auto w-full border-collapse border rounded">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {cart.products.map((product) => (
          <tr>
            <td className="border p-2">{product.title}</td>
            <td className="border p-2 text-center">
              <ChangeQtyButtons productId={product.id} />
            </td>
            <td className="border p-2 text-right">{product.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}