import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/react-toastify/dist/ReactToastify.css';
import reducer from './store/reducer/reducer';
import JobListReducer from './store/reducer/jobListReducer';
import EditForm from './store/editForm';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    EditForm,
    red: reducer,
    jobList: JobListReducer,
    form: reduxFormReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
