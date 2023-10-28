import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getStudentsList() {
    return axios.get(API_URL + 'users', { withCredentials: true });
  }

  getStudentInfo(id) {
    return axios.get(API_URL + 'users/' + id, { withCredentials: true });
  }

  updateStudentInfo(id) {
    return axios.put(API_URL + 'student/' + id + '/update', { withCredentials: true });
  }

  deleteStudent(id) {
    return axios.delete(API_URL + 'users/' + id, {withCredentials: true });
  }
}

export default new UserService();