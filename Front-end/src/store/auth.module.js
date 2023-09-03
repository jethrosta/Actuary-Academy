import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const loginState = user
? { status: { loggedIn: true }, user }
: { status: { loggedIn: false }, user: null };

export const auth = {
  id: 'auth',
  state: () => ({
      loginState,
  }),

  getters: {

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
          loginState.status.loggedIn = true;
          loginState.user = user;
          return Promise.resolve(user);
        },
        error => {
          console.log('auth module login fail');
          loginState.status.loggedIn = false;
          loginState.user = null;
          return Promise.reject(error);
        }
      );
    },

    logout() {
      loginState.status.loggedIn = false;
      loginState.user = null;
      return new Promise(resolve => {
        localStorage.removeItem('user');
        resolve();
      });
    }    
  }
};