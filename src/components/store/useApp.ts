import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type IUseTheme = {
  isDark: boolean;
  language: string
  setTheme: () => void;
  setLanguage: (language: string) => void;
};

export const useApp = create<IUseTheme>()(
  persist(
    (set) => ({
        isDark: true,
        language: 'en',
        setTheme: () => set((state) => ({ isDark: !state.isDark })),
        setLanguage: (language) => {
          set({language: language})
        }
    }),
    {name: 'App'}
  )
);
