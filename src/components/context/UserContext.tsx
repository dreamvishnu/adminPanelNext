import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getItem, setItem } from "@/components";

interface UserContextType {
  user: { token: number; role: string; username: string } | null;
  setUser: (user: { token: number; role: string; username: string } | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<{ token: number; role: string; username: string } | null>(
    null
  );

  useEffect(() => {
    const storedUser = getItem("userdata");
    if (storedUser) {
      setUserState(storedUser);
    }
  }, []);

  const setUser = (user: { token: number; role: string; username: string } | null) => {
    if (user) {
      setItem("userdata", user);
    } else {
      setItem("userdata", null); // Clear data
    }
    setUserState(user);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
