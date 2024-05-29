import { combineReducers } from "redux";
// sub reducer들을 합치는 것
import todos from './todos'
import counter from './counter'
import posts from './post'

const rootReducer = combineReducers({
    todos: todos,
    counter: counter,
    posts: posts
})

export default rootReducer;
