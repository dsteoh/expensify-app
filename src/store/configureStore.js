import { createStore, combineReducers } from 'redux';
import expsensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filter";

export default () => {
  //Store creation
  const store = createStore(
    combineReducers({
        expenses: expsensesReducer,
        filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  );
  return store;
};
