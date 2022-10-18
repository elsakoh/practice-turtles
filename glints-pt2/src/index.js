import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import listItems from './Components/reducers/ListItems';


const store = createStore(listItems, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
