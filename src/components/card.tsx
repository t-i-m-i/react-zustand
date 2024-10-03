"use client";

import { useStore } from "../store/store";
import { Product } from "../types/product";
import ChangeQtyButtons from "./ChangeQtyButtons";

interface ProductProps {
  product: Product;
}

export default function Card({ product }: ProductProps) {

  // const cart = useStore();
  // returns all store: user-slice and cart-slice:
  // {"address":"","age":0,"fullName":"","userName":"","products":[{"id":"4","price":1500,"title":"Galaxy Tab S9","qty":1}],"total":0}


  // get from store only needed items
  // const addProduct = useStore((state) => state.addProduct);
  // const cartProducts = useStore((state) => state.products);

  const { addProduct, cartProducts } = useStore(
    (state) => ({
      addProduct: state.addProduct,
      cartProducts: state.products
    })
  );

  const cartProduct = cartProducts.find((item) => item.id === product.id);

  return (
    <>
      {/* <li>
        {JSON.stringify(cartProduct)}
      </li> */}
      <li className="border rounded p-4">
        <h2>{product.title}</h2>
        <div>{product.price}</div>
        {!cartProduct ? <button
          className="px-4 py-2 bg-green-700 text-white rounded"
          onClick={() => addProduct(product)}
        >
          Add to cart
        </button> : <ChangeQtyButtons productId={product.id} />
        }
      </li>
    </>
  )
}

