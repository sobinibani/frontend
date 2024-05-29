import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import counter from './reducers/index.js'
import rootReducer from './reducers/index.js'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { loggerMiddleware } from './middleware/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

const middleware = applyMiddleware(thunk, loggerMiddleware);
const store = createStore(rootReducer, middleware);

const render = () => root.render(
    <Provider store={store}>
        <App 
        // value={store.getState()} 
        // onIncrement={()=>store.dispatch({type:'INCREMENT'})}
        // onDecrement={()=>store.dispatch({type:'DECREMENT'})}
        />
    </Provider>
)

render();
store.subscribe(render);