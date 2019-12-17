import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeIcons } from '@uifabric/icons';
import configureStore from "./stores/indexReducer";
import { Provider } from "react-redux";
const store = configureStore();
initializeIcons();
const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
