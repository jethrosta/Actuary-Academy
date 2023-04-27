export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: user.type + ' ' + user.token };
  } else {
    return {};
  }
}