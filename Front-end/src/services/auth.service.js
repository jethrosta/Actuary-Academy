import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'auth/';
const userLocal = JSON.parse(localStorage.getItem('user'));

class AuthService {

  async getUpdatedUser(user) {
    try {
      const res = await axios.get(API_URL + 'currentuser', {withCredentials: true})
      return res;
    } catch (error) {
      throw new Error(error)
    }
    
  }

  async register(user) {
    return await axios.post(API_URL + 'register', {
      name: user.name,
      email: user.email,
      password: user.password
    }, { withCredentials: true });
  }

  async login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password,
      }, { withCredentials: true })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          console.log('Successfully logged in')
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  async logout() {
    return await axios.post(API_URL + 'logout', { email: userLocal.email }, {
      withCredentials: true
    })
  }
}

export default new AuthService();