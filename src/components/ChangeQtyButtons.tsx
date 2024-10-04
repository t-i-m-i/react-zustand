import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";

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
  const { getProductById, incQty, decQty } = useStore(
    // shallow comparison: won’t check nested objects for equality — only the top-level references are compared. No need for flat objects. Usefull for nested structures.
    useShallow((state) => ({
      getProductById: state.getProductById,
      incQty: state.incQty,
      decQty: state.decQty
    }))
  );

  const product = getProductById(productId);

  return (
    <>
      {product && (
        <div>
          <button onClick={() => decQty(product.id)} className="px-2 py-1 bg-green-700 text-white rounded">-</button>
          <span className="px-2 py-1">{ product.qty }</span>
          <button onClick={() => incQty(product.id)} className="px-2 py-1 bg-green-700 text-white rounded">+</button>
        </div>
      )}
    </>
  )
}