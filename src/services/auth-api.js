import { request } from './request';

const AUTH_URL = '/auth';

export default {
  verify() {
    return request.get(`${AUTH_URL}/verify`);
  },
  signin(credentials) {
    return request.post(`${AUTH_URL}/signin`, credentials);
  },
  signup(user) {
    console.log('auth api signup', user);
    return request.post(`${AUTH_URL}/signup`, user);
  },
  getUser() {
    return request.get(`${AUTH_URL}/me`);
  }
};
