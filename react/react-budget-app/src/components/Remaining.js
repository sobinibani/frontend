import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils';

const Remaining = () => {
  const {expenses, budget, income} = useContext(AppContext);

  const totalExpenses = 
  expenses.reduce((total, item) => {return (total += item.cost)}, 0);

  const incomeTotal = 
  income.reduce((total, item) => {return (total += item.cost)}, 0);
  console.log(incomeTotal)

  const alertType = totalExpenses > incomeTotal ? 'alert-danger' : 'alert-success'

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>남은 돈: {formatNumberToWon(incomeTotal - totalExpenses)}</span>
    </div>
  )
}

export default Remaining
