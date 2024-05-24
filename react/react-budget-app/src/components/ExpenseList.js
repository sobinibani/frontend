import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // console.log(expenses);

  useEffect(()=>{
    setFillteredExpenses(expenses)
  },[expenses])

  const [fillteredExpenses,setFillteredExpenses] = useState(expenses || []);

  const handleChange = (e) => {
    const searchResults = expenses.filter((expense)=>
      expense.name.toLowerCase().includes(e.target.value)
    )
    setFillteredExpenses(searchResults)
  }

  return (
    <>
      <input
        type='text'
        className='form-control'
        placeholder='검색하기...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {fillteredExpenses.map((expense)=>(
          <ExpenseItem
            key={expense.key}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  )
}

export default ExpenseList
