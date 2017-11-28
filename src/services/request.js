import superagent from 'superagent';
import store from '../store/index';

const API_URL = '/api';
let currentToken = '';

store.subscribe(() => {
  console.log('getting token from current state');
  const { token: newToken } = store.getState().auth;

  if (newToken !== currentToken) {
    currentToken = newToken;
    if (newToken) localStorage.setItem('RECIPE_BOX_TOKEN', newToken);
    else localStorage.clear('RECIPE_BOX_TOKEN');
  }
});

const wrapper = cmd => cmd
  .set('Authorization', currentToken)
  .then(res => res.body,
    ({ response }) => {
      const { body, text } = response;
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );

export const request =  {
  get(url) {
    return wrapper(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrapper(superagent.post(`${API_URL}${url}`).send(data));
  },
  delete(url) {
    return wrapper(superagent.delete(`${API_URL}${url}`));
  }
  // TODO: put, patch
};