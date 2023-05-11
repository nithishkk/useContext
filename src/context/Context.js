import React,{ useState, useContext, createContext } from 'react';

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [name, setName] = useState('nithish');
  const data=(a,b)=>{
    return a+b
  }
 

  return (
    <AppContext.Provider
      value={{
        name,
        data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
