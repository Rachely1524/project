import { applyMiddleware, combineReducers, createStore} from 'redux';
import UserReducer from './reducer/UserReducer';
import { getAllUsers,addUser } from './middleware/crud';


const reducer = combineReducers({UserReducer})

const store = createStore(reducer,applyMiddleware(addUser,getAllUsers));
window.store = store;
export default store;





