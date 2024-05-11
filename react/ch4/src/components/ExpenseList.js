import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = ({expenses, handleDelete}) => {
    return(
     <>
        <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} expense={expense}
            handleDelete={handleDelete}
            />
          )
        })}
        </ul>
        <button className="btn">목록 지우기</button>
     </>   
    )
}

export default ExpenseList;