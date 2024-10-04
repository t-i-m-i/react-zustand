import { useStore } from "../store/store";
import { Product } from "../types/product";
import ChangeQtyButtons from "./ChangeQtyButtons";

// import clsx from "clsx";
import s from "./Card.module.scss";

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
      {/* <li className={clsx(s.block, 'dev')}> */}
      <li className={s.block}>
        <h2 className={s.block__title}>{product.title}</h2>
        <div className={s.block__details}>
          <div>{product.price}</div>
          {cartProduct ? (
            <ChangeQtyButtons productId={product.id} />
          ) : (
            <button
              className="px-4 py-2 bg-green-700 text-white rounded"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
          )}
        </div>
      </li>
    </>
  )
}

