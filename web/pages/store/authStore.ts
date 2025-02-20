import { create } from "zustand";

interface AuthState {
    name: string;
    setName: (name: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    name: "",
    setName: (name) => {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        set({ name: formattedName });
    },
}));
