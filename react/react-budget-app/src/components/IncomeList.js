import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import IncomeItem from './IncomeItem'

const IncomeList = () => {
  const { income } = useContext(AppContext);

  return (
    <>
      <ul className='list-group mt-3 mb-3'>
        {income.map((item)=>(
          <IncomeItem
            key={item.key}
            id={item.id}
            name={item.name}
            cost={item.cost}
          />
        ))}
      </ul>
    </>
  )
}

export default IncomeList
