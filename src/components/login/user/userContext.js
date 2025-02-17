import { createContext } from 'react';
import { useLocalStorage } from './localStorage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const isLoggedIn = !!user;

  const handleLogOut = () => {
    setUser(null);
  };

  console.log(user);

  return <UserContext.Provider value={{ user, isLoggedIn, setUser, handleLogOut }}> {children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
