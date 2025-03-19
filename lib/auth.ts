import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  role: 'doctor' | 'frontdesk';
}

interface AuthStore {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (username, password) => {
        if (
          (username === 'doctor' && password === 'doctor') ||
          (username === 'frontdesk' && password === 'frontdesk')
        ) {
          set({ user: { username, role: username as 'doctor' | 'frontdesk' } });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-store',
    }
  )
);