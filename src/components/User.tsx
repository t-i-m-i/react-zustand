import { useEffect } from "react";
import { useStore } from "../store/store";
import { useShallow } from "zustand/react/shallow";

export default function User() {

  const { userAddress, userName, setAddress, fetchUser } = useStore(
    useShallow((state) => ({
      userAddress: state.userAddress,
      userName: state.userName,
      setAddress: state.setAddress,
      fetchUser: state.fetchUser
    }))
  )

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="px-5 py-2.5 border rounded border-green-700">
        <div className="mb-1">Name: {userName}</div>
        
        <label htmlFor="address" className="mb-1 block">Delivery address:</label>
        <input id="address" value={userAddress} onChange={(e) => setAddress(e.target.value)} type="text" className="px-2 py-2 border w-full"  />
      </div>
    </>
  );
}