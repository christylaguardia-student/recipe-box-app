import superagent from 'superagent';

export const API_URL = '/api/auth';

const wrapper = cmd => cmd
  .then(res => {
    console.log('AUTH API RESPONSE', cmd, res);
    return res.body;
  },
  ({ response }) => {
    throw response.body.error;
  });

export default {
  verify() {
    return wrapper(superagent.get(`${API_URL}/verify`));
  },
  signin(credentials) {
    return wrapper(superagent.post(`${API_URL}/signin`).send(credentials));
  },
  signup(user) {
    return wrapper(superagent.post(`${API_URL}/signup`).send(user));
  },
  getUser() {
    return wrapper(superagent.get('/api/me'));
  }
};
