export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
