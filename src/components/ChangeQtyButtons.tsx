import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import { useEffect } from "react";

interface Props {
  productId: string;
}

export default function ChangeQtyButtons({ productId }: Props) {

  // - This approach extracts all the properties (getProductById, incQty, decQty) directly from the store without any selector.
  // - It might cause unnecessary re-renders if any state in the store changes, even if those specific functions (getProductById, incQty, decQty) remain unchanged.
  // - This can affect performance if your store contains other reactive state elements that update frequently but aren't relevant to these functions.
  // const { getProductById, incQty, decQty } = useStore();

  // - This approach uses a selector function to explicitly pick the relevant state
  // - This will optimize the component by only re-rendering when the selected parts change
  // - It's more efficient in avoiding unnecessary renders caused by other unrelated state changes in the store.
  const { getProductById, incQty, decQty, setTotal } = useStore(
    // shallow comparison: won’t check nested objects for equality — only the top-level references are compared. No need for flat objects. Usefull for nested structures.
    useShallow((state) => ({
      getProductById: state.getProductById,
      incQty: state.incQty,
      decQty: state.decQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      (state) => state.products, 
      (products) => {
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
      },
      { fireImmediately: true }
    )
    return unSub;
  }, [setTotal]);
  

  return (
    <>
      {product && (
        <div>
          <button onClick={() => decQty(product.id)} className="w-8 h-8 bg-green-700 text-white rounded">-</button>
          <span className="inline-block px-2 h-8 py-1 min-w-12 text-center">{ product.qty }</span>
          <button onClick={() => incQty(product.id)} className="w-8 h-8 bg-green-700 text-white rounded">+</button>
        </div>
      )}
    </>
  )
}