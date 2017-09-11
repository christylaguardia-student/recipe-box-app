import { request } from './request';

export const API_URL = '/recipes';

export default {
  getAll() {
    return request.get(API_URL);
  },
  get(id) {
    return request.get(`${API_URL}/${id}`);
  },
  add(data) {
    return request.post(API_URL, data);
  },
  delete(id) {
    return request.delete(`${API_URL}/${id}`);
  }
  // TODO:
  // update(id, data) {
  //   return request.patch(`${API_URL}/${id}`, data);
  // }
};
