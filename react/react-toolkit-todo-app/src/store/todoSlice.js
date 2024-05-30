import { createSlice } from "@reduxjs/toolkit";

let todoList = [];
const localTodo = JSON.parse(localStorage.getItem('todolist'));
if(localTodo){
    todoList.push(...localTodo);
} else {
    todoList = [];
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoList,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            // console.log(action.payload)
            return state.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const {id, newText} = action.payload
            const todo = state.find(todo => todo.id === id);
            if(todo){
                todo.text = newText;
            }
        },
    }
})

export const {addTodo, deleteTodo, toggleTodo, editTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer