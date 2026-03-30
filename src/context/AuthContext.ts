import { createContext } from "react";
import type { Users } from "../data/mockData";

export type LoginResult = { success: true; role: string } | { success: false };

type AuthContextType = {
  user: Users | null;
  login: (email: string, password: string) => LoginResult;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
