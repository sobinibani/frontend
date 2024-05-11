import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '시리얼', amount: 1000 },
    { id: 2, charge: '빵', amount: 2000 },
    { id: 3, charge: '양파', amount: 3000 },
  ]);

  const handleDelete = (id) => {
    const NewExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(NewExpenses)
  }

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);

  const handleCharge = (value) => {
    setCharge(value)
  }

  const handleAmount = (value) => {
    setAmount(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== '' && amount > 0){
      const NewExpense = { id:crypto.randomUUID(), charge: charge, amount: amount}
      setExpenses([...expenses, NewExpense]);
      console.log(expenses);
      setCharge('');
      setAmount(0);
    } else {
      console.log('error')
    }
  }

  return (
    <main className='main-container'>
      <div className='sub-container'>
        <h1>장바구니</h1>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem', borderRadius:'5px', marginBottom:'10px' }}>
          <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
        </div>
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' , borderRadius:'5px'}}>
          <ExpenseList expenses={expenses} handleDelete={handleDelete}/>
        </div>

        <div style={{display: 'flex', justifyContent: 'start'}}>
          <p style={{fontSize: '2rem'}}>
            총 합계:
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
