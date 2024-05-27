import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils';

const Income = () => {
  const {income} = useContext(AppContext)
  
  const total = income.reduce ((total, item)=>{
    return(total += item.cost)
  },0);
  console.log(total)

  return (
    <div className='alert p-4 alert-success'>
      <span>총 수입: {formatNumberToWon(total)}</span>
    </div>
  )
}

export default Income;
