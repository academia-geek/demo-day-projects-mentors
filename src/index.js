import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
