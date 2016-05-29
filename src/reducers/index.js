import { combineReducers } from 'redux';
import BooksReducer from './reducer_book_list';
import ActiveBook from './reducer_active_book';

//this combines reducers to form properties of application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
