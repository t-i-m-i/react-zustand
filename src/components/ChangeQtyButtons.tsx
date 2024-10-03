import { useStore } from "../store/store";

interface Props {
  productId: string;
}

export default function ChangeQtyButtons({ productId }: Props) {

  const { getProductById, incQty, decQty } = useStore();
  const product = getProductById(productId);

  return (
    <>
      <button onClick={() => decQty(productId)} className="px-2 py-1 bg-green-700 text-white rounded">-</button>
      <span className="px-2 py-1">{ product?.qty }</span>
      <button onClick={() => incQty(productId)} className="px-2 py-1 bg-green-700 text-white rounded">+</button>
    </>
  )
}