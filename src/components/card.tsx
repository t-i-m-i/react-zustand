"use client";

import { useStore } from "../store/store";
import { Product } from "../types/product";

interface ProductProps {
  product: Product;
}

export default function Card({ product }: ProductProps) {

  const cart = useStore(); 
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

  return (
    <>
      {/* <li>
        {JSON.stringify(cart)}
      </li> */}
      <li className="border rounded p-4">
        <h2>{product.title}</h2>
        <div>{product.price}</div>
        <button
          className="px-4 py-2 bg-green-700 text-white rounded"
          onClick={() => addProduct(product)}
        >
          Add to cart
        </button>
      </li>
    </>
  )
}

