import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// Imports for redux below
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// Reducers          default value
const personName = (state = 'Chris', action) => {
    // Always check the action.type before changing our value
    if ( action.type === 'SET_PERSON_NAME' ) {
        // This changes the value of our reducer
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    // Otherwise, value of our reducer remains unchanged
    return state;
}

const allPeople = (state = [], action) => {
    if ( action.type === 'ADD_PERSON_NAME' ) {
        // Return a NEW array with existing items PLUS the new item
        // using ... (called the spread operator)
        return [...state, action.payload]
        // basically the same as state.push
    } else if (action.type === 'CLEAR_FORM') {
        return [];
    }
    return state;
}

const activityType = (state = 'Walking', action) => {
    if ( action.type === "SET_ACTIVITY_TYPE" ) {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}

const minutes = (state = 0, action) => {
    if ( action.type === "SET_MINUTES" ) {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

const miles = (state = 0, action) => {
    if ( action.type === "SET_MILES" ) {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

const activities = (state = [],  action) => {
    if (action.type === "SET_ACTIVITY_LIST") {
        // action.payload in this case will be the new array from the server
        return action.payload;
    }
    return state;
}

// Store
const storeInstance = createStore(
    combineReducers(
        {
            personName,
            allPeople,
            activityType,
            minutes,
            miles,
            activities,
            // Other reducers go here
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
