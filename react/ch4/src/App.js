import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '시리얼', amount: 1000 },
    { id: 2, charge: '빵', amount: 2000 },
    { id: 3, charge: '양파', amount: 3000 },
  ]);

  const handleDelete = (id) => {
    const NewExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(NewExpenses)
    handleAlert({type: "danger", text: "아이템이 삭제되었습니다."});
  }

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState('');

  const handleCharge = (value) => {
    setCharge(value)
  }

  const handleAmount = (value) => {
    setAmount(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== '' && amount > 0){
      if(edit){
        const NewExpenses = expenses.map(item => {
          return item.id === id? {...item, charge, amount} : item;
        })

        setExpenses(NewExpenses);
        setEdit(false);
        handleAlert({type: "success", text: "아이템이 수정되었습니다."})
      } else {
        const NewExpense = { id:crypto.randomUUID(), charge: charge, amount: amount}
        setExpenses([...expenses, NewExpense]);
        console.log(expenses);
        handleAlert({type: "success", text: "아이템이 생성되었습니다."});
      }
      setCharge('');
      setAmount(0);
    } else {
      handleAlert({type: "danger", text: "charge는 빈값일 수 없으며 amount는 0보다 커야합니다."});
    }
  }

  const [alert,setAlert] = useState({show: false})

  const handleAlert = ({type, text}) => {
    setAlert({show:true, type, text});
    setTimeout(()=>{
      setAlert({show: false})
    }, 7000)
  };

  const [edit, setEdit] = useState(false);

  const handleEdit = (id) => {
    const expense =  expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true); 
  }

  const clearItems = () => {
    setExpenses([]);
  }

  return (
    <main className='main-container'>
      <div className='sub-container'>
        {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
        <h1>장바구니</h1>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem', borderRadius:'5px', marginBottom:'10px' }}>
          <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit}/>
        </div>
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' , borderRadius:'5px'}}>
          <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems}/>
        </div>

        <div style={{display: 'flex', justifyContent: 'start'}}>
          <p style={{fontSize: '2rem'}}>
            총 합계:
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}원
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
