import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserContextData } from '../types/types';

interface UserContextType {
  user: UserContextData | null;
  login: (userData: UserContextData) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const getCookie = (name: string): string => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  };

  const deleteCookie = (name: string) => {
    console.log('deleteCookie')
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const [user, setUser] = useState<UserContextData | null>(() => {
    const storedUser = getCookie('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  // check cookie expiration


  const login = (userData: UserContextData) => {
    setUser(userData);
    setCookie('user', JSON.stringify(userData), 30); // 30 là số ngày có thể thay đổi
  };

  const logout = () => {
    setUser(null);
    deleteCookie('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};