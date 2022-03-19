import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
