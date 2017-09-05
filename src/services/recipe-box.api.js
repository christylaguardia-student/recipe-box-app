import superagent from 'superagent';

export const API_URL = '/api/recipes';

// return the response body for each request
// or throw an error
const wrapper = cmd => cmd
  .then(res => {
    // console.log('API response', res.body);
    return res.body;
  },
    ({ response }) => {
      throw response.body.error;
    }
  );

export const request = {
  getAll() {
    return wrapper(superagent.get(API_URL));
  },
  get(id) {
    return wrapper(superagent.get(`${API_URL}/${id}`));
  },
  add(data) {
    return wrapper(superagent.post(API_URL).send(data));
  },
  delete(id) {
    return wrapper(superagent.delete(`${API_URL}/${id}`));
  },
  update(id, data) {
    return wrapper(superagent.patch(`${API_URL}/${id}`).send(data));
  }
};
