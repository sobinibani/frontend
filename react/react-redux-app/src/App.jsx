import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/post';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=> state.counter);
  const todos = useSelector((state)=> state.todos);
  const posts = useSelector((state)=>state.posts);

  const [todoValue, setTodoValue] = useState('');

  useEffect(()=>{
    dispatch(fetchPosts());
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', text: todoValue})
  }
  const handleIncrement = () => {
    dispatch({type:'INCREMENT'})
  }
  const handleDecrement = () => {
    dispatch({type:'DECREMENT'})
  }

  return (
    <div className='App'>
      <div>
        <ul>
          {posts.map((post, i) => <li key={i}>{post.title}</li>)}
        </ul>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={todoValue}
            onChange={(e)=>setTodoValue(e.target.value)}
          />
          <input
            type='submit'
          />
        </form>
      </div>

      <div>
        Clicked: {counter} times

        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}

export default App
