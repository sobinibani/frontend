import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [tab, setTab] = useState('all');

  const todos = useSelector((state) => {
    if(tab == 'completed'){
      return state.todos.filter((todo) => todo.completed);
    } else if(tab == 'active'){
      return state.todos.filter((todo) => !todo.completed);
    } else {
      return state.todos;
    }
  });

  console.log(todos);
  localStorage.setItem('todolist',JSON.stringify(todos))


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

  const handleTab = (text) => {
    setTab(text);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className='add-todo'>
          <input
            type='text'
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          />
          <button type='submit' className='btn btn-add'>Add Todo</button>
        </div>

        <ul className='tab'>
          <li
            onClick={()=>handleTab('all')}
            className={tab == 'all' ? 'on': null}
          >all</li>
          <li
            onClick={()=>handleTab('completed')}
            className={tab == 'completed' ? 'on': null}
          >completed</li>
          <li
            onClick={()=>handleTab('active')}
            className={tab == 'active' ? 'on': null}
          >active</li>
        </ul>
        
        <ul className='todo-list'>
          {todos.map(
            (todo) => {
            return (
              <li key={todo.id}>
                {todo.id === editId ? 
                  /*수정중*/
                  <>                  
                    <input 
                      type='text' 
                      value={editText} 
                      onChange={(e)=>setEditText(e.target.value)}
                    />
                    <div className='btn-wrap'>
                      <button onClick={handleEditSave} className='btn'>save</button>
                      <button onClick={handleEditCancel} className='btn'>cancel</button>
                    </div>
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
                    <div className='btn-wrap'>
                      <button onClick={()=>{
                        handleEditStart(todo.id, todo.text)
                      }} className='btn'>Edit</button>
                      <button onClick={()=>{handleDelete(todo.id)}} className='btn'>Delete</button>
                    </div>
                  </>
                }
              </li>
            )}
          )}
        </ul>
      </form>
    </div>
  );
}

export default App;
