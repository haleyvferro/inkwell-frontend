import React from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import mainReducer from './reducers/index'
import "semantic-ui-css/semantic.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/solar/bootstrap.min.css";




const store = createStore(mainReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
