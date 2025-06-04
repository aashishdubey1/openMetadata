import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  login: (user, token) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ isAuthenticated: true, user, token });
  },

  logout: () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    set({ isAuthenticated: false, user: null, token: null });
    console.log("Logged out successfully");
  },


  initializeAuth: () => {
    const token = localStorage.getItem('userToken');
    const userJson = localStorage.getItem('user'); 

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson); 
        set({ isAuthenticated: true, token, user }); 
        console.log("Auth initialized from localStorage: User is authenticated.");
      } catch (e) {
        console.error("Error parsing user data from localStorage:", e);
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        set({ isAuthenticated: false, user: null, token: null });
      }
    } else {
      localStorage.removeItem('userToken');
      localStorage.removeItem('user');
      set({ isAuthenticated: false, user: null, token: null });
      console.log("Auth initialized: No valid persistent token or user data found.");
    }
  }

}));

export default useAuthStore;