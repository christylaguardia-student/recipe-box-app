import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import App from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import recipeReducers from './store/recipe.reducers';

const store = createStore(
  recipeReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
