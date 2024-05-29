import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  // console.log(todos);

  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() !== ''){
      dispatch(addTodo(text));
      setText('');
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleEditStart = (id, text) => {
    // console.log(id, text)
    setEditId(id);
    setEditText(text);
  }

  const handleEditCancel = () => {
    setEditId(null);
    setEditText('');
  }

  const handleEditSave = () => {
    if(editText.trim() !== ''){
      dispatch(
        editTodo({
          id: editId,
          newText: editText,
        })
      )
      setEditId(null);
      setEditText('');
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
        />
        <button type='submit'>Add Todo</button>
        <ul>
          {todos.map(
            todo => (
              <li key={todo.id}>
                {todo.id === editId ? 
                  /*수정중*/
                  <>                  
                    <input 
                      type='text' 
                      value={editText} 
                      onChange={(e)=>setEditText(e.target.value)}
                    />
                    <button onClick={handleEditSave}>save</button>
                    <button onClick={handleEditCancel}>cancel</button>
                  </>
                : 
                  <>
                    <input 
                      type='checkbox' 
                      checked={todo.completed}
                      onChange={()=>dispatch(toggleTodo(todo.id))}
                    />
                    <span>
                      {todo.text}
                    </span>
                    <button onClick={()=>{
                      handleEditStart(todo.id, todo.text)
                    }}>Edit</button>
                    <button onClick={()=>{handleDelete(todo.id)}}>Delete</button>
                  </>
                }
              </li>
            )
          )}
        </ul>
      </form>
    </div>
  );
}

export default App;
