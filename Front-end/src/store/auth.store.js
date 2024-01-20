import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const loginState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

export const auth = {
  id: 'auth',
  state: () => ({
    loginState,
  }),

  getters: {
    getUser: (state) => {
      return state.loginState.user;
    },
  },

  actions: {
    register(user) {
      return AuthService.register(user).then(
        response => {
          console.log('auth module success');
          loginState.status.loggedIn = false;
          return Promise.resolve(response.data);
        },
        error => {
          console.log('auth module fail');
          loginState.status.loggedIn = false;
          return Promise.reject(error);
        }
      );
    },

    login(user) {
      return AuthService.login(user).then(
        user => {
          console.log('auth module login success');
          loginState.user = user;
          loginState.status.loggedIn = true;
          return Promise.resolve(user);
        },
        error => {
          console.log('auth module login fail');
          loginState.user = null;
          loginState.status.loggedIn = false;
          return Promise.reject(error);
        }
      );
    },

    async logout() {
      try {
        await AuthService.logout();
        localStorage.removeItem('user');
        this.loginState.user = null;
        this.loginState.status.loggedIn = false;
      } catch (error) {
        throw error;
      }
    }
    
  }
};