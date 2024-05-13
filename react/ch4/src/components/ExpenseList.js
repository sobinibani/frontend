import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {
    return(
     <>
        <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} expense={expense}
            handleDelete={handleDelete} handleEdit={handleEdit}
            />
          )
        })}
        </ul>
        {expenses.length > 0?         
        <button 
          className="btn"
          onClick={clearItems}
        >목록 지우기</button> : null}
     </>   
    )
}

export default ExpenseList;