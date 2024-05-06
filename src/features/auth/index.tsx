import { createContext, useCallback, useContext } from "react";

import useLocalStorage from "@/shared/lib/useLocalStorage";

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  user: string | null;
}

const AuthContext = createContext<AuthContext | null>(null);

const key = "auth.user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage<string>(key);
  const isAuthenticated = !!user;

  const logout = useCallback(() => setUser(key), [setUser]);

  const login = useCallback(
    (username: string) => setUser(key, username),
    [setUser],
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
