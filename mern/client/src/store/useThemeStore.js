import { create } from "zustand";

export const useThemeStore = create((set)=>({
    theme: localStorage.getItem('curachat-theme') || 'coffee',
    setTheme: (theme)=>{
        localStorage.setItem('curachat-theme',theme);
        set({theme});
    }
}))