
import rootReducer from './reducers'
import { createStore,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
 const storeConfig=createStore(
    rootReducer,composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
  
 
  )

    export default storeConfig