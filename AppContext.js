import React, { createContext, useState, useContext } from 'react';

// Tạo Context
const AppContext = createContext(null);

// Tạo hook để dễ dàng sử dụng Context
export const useAppContext = () => useContext(AppContext);

// Provider cho toàn bộ ứng dụng
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ token: '' });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
