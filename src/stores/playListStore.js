import { create } from 'zustand';

export const usePlayListStore = create((set) => ({
  sortType: 'old',
  setSort: () => set((state) => ({ sortType: state })),
}));
