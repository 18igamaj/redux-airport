import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
/** TODO: import REDUX **/


/** TODO: Add REDUCERS */

const airlinesList = (state = [], action ) => {
    console.log('Does our airLine work?')

    if(action.type === 'ADD_AIRLINE'){
        return [...state, action.payload]
    }
    return state ;
}

/** TODO: Create store */
const storeInstance = createStore(
   airlinesList , 
   applyMiddleware(logger)
)


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);