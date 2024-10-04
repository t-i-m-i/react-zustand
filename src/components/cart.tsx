import { useState } from "react";
import { useStore } from "../store/store";
import ChangeQtyButtons from "./ChangeQtyButtons";
import { useShallow } from "zustand/react/shallow";

// import clsx from "clsx";
// import s from "./Cart.module.scss";

export default function Cart() {

  const store_debug = useStore();

  const { products, removeProduct, reset, total } = useStore(
    useShallow((state) => ({
      products: state.products,
      removeProduct: state.removeProduct,
      reset: state.reset,
      total: state.total,
    }))
  )

  const [showJson, toggleShowJson] = useState(false);

  return (
    <>
      <div className="p-2 text-xs rounded-lg bg-white absolute right-4 top-4 text-right">
        store json: {' '}
        <span className="px-2 py-1 bg-green-700 text-white rounded cursor-pointer" onClick={() => toggleShowJson(prev => !prev)}>toggle</span>
        {showJson && <pre className="text-left">
          {JSON.stringify(store_debug, null, 2)}
        </pre>}
      </div>

      <div className="border rounded border-green-700 overflow-hidden bg-white">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">Product</th>
              <th className="p-2">Qty</th>
              <th className="py-2 px-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="py-2 px-4">
                  <div className="flex gap-2 justify-between items-center">
                    {product.title}
                    <button className="px-2 py-1 bg-red-700 text-white rounded" onClick={() => removeProduct(product.id)}>Remove</button>
                  </div>
                </td>
                <td className="p-2 text-center">
                  <ChangeQtyButtons productId={product.id} />
                </td>
                <td className="py-2 px-4 text-right">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="my-4 px-4 text-right">
        <p>Total: <b className="text-xl">{total}</b> $</p>
      </div>
      <div className="my-4">
        {products.length > 0 && (
          <p>
            <button className="px-2 h-8 bg-red-700 text-white rounded" onClick={reset}>Empty cart</button>
          </p>
        )}
      </div>
    </>
  );
}