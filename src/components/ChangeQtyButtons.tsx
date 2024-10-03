import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";

interface Props {
  productId: string;
}

export default function ChangeQtyButtons({ productId }: Props) {

  const { getProductById, incQty, decQty } = useStore(
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