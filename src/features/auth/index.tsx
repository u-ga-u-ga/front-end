import { createContext, useCallback, useContext } from "react";

import useLocalStorage from "@/shared/lib/useLocalStorage";

export type AuthSaveContext = {
  isSave?: boolean;
  autoLogin?: boolean;
  user?: string | null;
};
export type AuthContext = {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
  user: string | null;
} & {
  savedState: AuthSaveContext | null;
  saveLoginInfo: (param: AuthSaveContext) => void;
};

const AuthContext = createContext<AuthContext | null>(null);

export const key = "auth.user";
export const saveKey = "auth.user.save";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, login, logout] = useLocalStorage<string>(key);
  const [savedState, setSavedState] = useLocalStorage<AuthSaveContext>(saveKey);
  const isAuthenticated = !!user;

  const saveLoginInfo = useCallback(
    (param: AuthSaveContext) =>
      setSavedState((props) => {
        if (props) return { ...props, ...param };
        return param;
      }),
    [setSavedState],
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        savedState,
        saveLoginInfo,
      }}
    >
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
