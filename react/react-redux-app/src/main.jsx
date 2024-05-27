import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import counter from './reducers/index.js'
import rootReducer from './reducers/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
console.log(store.getState())

const render = () => root.render(
      <App 
      value={store.getState()} 
      onIncrement={()=>store.dispatch({type:'INCREMENT'})}
      onDecrement={()=>store.dispatch({type:'DECREMENT'})}
    />
)

render();
store.subscribe(render);