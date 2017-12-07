import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// store
import store, {history} from './store';
// components
import App from './containers/App';


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  );
};

// store.subscribe(() => {
//   render();
//   console.log(store.getState());
// });
render();
