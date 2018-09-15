import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//(initial state)
const defaultObject = {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
}

const cart = (state = defaultObject, action) => {
    const newInfo = action.payload;
    console.log('new info', newInfo);
    if (action.type === 'ADD_FEEL') {
        // FeelingPage logic here
        return {...state, feeling: newInfo}
    }else if (action.type === 'ADD_UNDERSTAND') {
        // UnderstandPage logic here
        return {...state, understanding: newInfo}
    }else if (action.type === 'ADD_SUPPORT') {
        return {...state, support: newInfo}
    }else if (action.type === 'ADD_COMMENT') {
        return {...state, comments: newInfo}
    }
        else if (action.type === 'EMPTY_CART') {
        return defaultObject;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({cart}),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();