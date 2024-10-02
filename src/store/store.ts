import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { Store } from "../types/store";
import { createUserSlice } from "./user-slice";
import { createCartSlice } from "./cart-slice";

// https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
// https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern
export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }))
);