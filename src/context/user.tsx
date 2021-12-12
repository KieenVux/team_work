import { createContext, FC, useState } from "react";
import { Cookies } from "react-cookie";
import { instance } from "../common/axios";

export interface User {
  __id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: string;
  role: string[];
}

interface UserContextType {
  login: (
    email: string,
    password: string,
    callback: (dest: string) => void
  ) => Promise<void>;
  logout: () => void;
  user: Partial<User>;
}

export const UserContext = createContext<UserContextType>(null!);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<Partial<User>>(null!);

  const login = async (
    email: string,
    password: string,
    callback: (dest: string) => void
  ) => {
    const response = await instance.post("/auth", {
      email,
      password,
    });
    const data: Partial<User> = response.data;
    if (data == null || data == undefined) return;
    setUser(data);
    callback(data.role?.includes("admin") ? "/" : "/account");
  };

  const logout = () => {
    setUser(null!);
    const cookie = new Cookies();
    cookie.remove("auth-token");
  };

  const value: UserContextType = {
    login,
    logout,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
