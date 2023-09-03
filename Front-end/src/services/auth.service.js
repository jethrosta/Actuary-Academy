import axios from 'axios';

const API_URL = 'http://localhost:8080/v2/auth/';


class AuthService {
    
  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.name,
      email: user.email,
      password: user.password
    }, { withCredentials: true });
  }
  
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password,
      }, {withCredentials: true})
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          console.log('Successfully logged in')
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
    }
}

export default new AuthService();