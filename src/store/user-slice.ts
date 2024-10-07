import { StateCreator } from "zustand";

type UserState = {
    userName: string;
    userAddress: string;
};

type UserActions = {
    setAddress: (userAddress: string) => void;
    fetchUser: () => Promise<void>;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
    UserSlice,
    [['zustand/immer', never]],
    [],
    UserSlice
> = (set) => ({
    userAddress: '',
    userName: '',
    setAddress: (userAddress) => 
        set((state) => {
            state.userAddress = userAddress;
        }),
    fetchUser: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // const response = await fetch('/api/user');
		// const data = await response.json();
		// set({
        //     userName: data.userName,
        //     userAddress: data.userAddress,  
        // })

        set({
          userName: 'Hulk Incredible',
          userAddress: '',  
        });
    }
});
