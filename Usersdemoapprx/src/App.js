import React from 'react';

import './App.css';

import  store from './redux/configstore'
import {Provider} from 'react-redux'
import Users from './component/Users';
console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Users/>
    </div>
    </Provider>
  );
}

export default App;
