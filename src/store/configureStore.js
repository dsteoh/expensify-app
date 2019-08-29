import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expsensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filter";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  //Store creation
  const store = createStore(
    combineReducers({
        expenses: expsensesReducer,
        filters: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
