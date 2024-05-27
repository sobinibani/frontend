import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../contexts/AppContext';

const IncomeItem = ({id,name,cost}) => {
  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({type: 'DELETE_INCOME', payload: id})
  }
  return (
    <li
      className='list-group-item d-flex
      justify-content-between
      align-items-center
      '
    >
      {name}
      <div>
        <span className='badge bg-success me-3'>{cost}</span>
        <TiDelete
          size= {'1.5em'}
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  )
}

export default IncomeItem
