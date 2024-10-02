"use client";

import { useStore } from "../store/store";

export default function Cart() {

  const cart = useStore();

  return (
    <>
      {JSON.stringify(cart)}
    </>
  );
}