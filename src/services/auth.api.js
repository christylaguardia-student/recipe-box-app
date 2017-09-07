import superagent from 'superagent';

export const API_URL = '/api/auth';

// const wrapper = cmd => cmd
//   .then(res => {
//     return res.body;
//   },
//   ({ response }) => {
//     throw response.body.error;
//   });

export default {
  verify() {
    return superagent.get(`${API_URL}/verify`);
  },
  signin(credentials) {
    return superagent.post(`${API_URL}/signin`).send(credentials);
  },
  signup(user) {
    return superagent.post(`${API_URL}/signup`).send(user);
  },
  getUser() {
    return superagent.get('/api/me');
  }
};
