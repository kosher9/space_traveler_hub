import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/Missions';
import rocketsReducer from './rockets/rocket';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
