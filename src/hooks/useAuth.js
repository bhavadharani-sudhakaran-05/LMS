import { useEffect } from 'react';
import useAuthStore from '../context/authStore';

export default function useAuth() {
  const { user, token, setUser, setToken, logout } = useAuthStore();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !token) {
      setToken(storedToken);
    }
  }, []);

  const isAuthenticated = !!token;

  return {
    user,
    token,
    isAuthenticated,
    login: setUser,
    logout,
  };
}
