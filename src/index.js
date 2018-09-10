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
    feedback: {
        feeling: '',
        understanding: '',
        support: '',
        comments: ''
    },
}

const cart = (state = defaultObject, action) => {
    if (action.type === 'ADD_FEEL') {
        // FeelingPage logic here
        const newInfo = action.payload;
        return {...state, feedback: newInfo.feedback, type: newInfo.feeling}
    }else if (action.type === 'ADD_UNDERSTAND') {
        // UnderstandPage logic here
        const newInfo = action.payload;
        return {...state, feedback: newInfo.feedback, type: newInfo.howIUnderstand}
    }else if (action.type === 'ADD_SUPPORT') {
        const newInfo = action.payload;
        return {...state, feedback: newInfo.feedback, type: newInfo.support}
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