import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';

const AddIncomeForm = () => {
  const {dispatch} = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const income = {
      id: crypto.randomUUID(),
      name: name,
      cost: cost
    }
    dispatch({
      type:'ADD_INCOME',
      payload: income
    })

    setName('');
    setCost(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm col-lg-4'>
            <label>수입</label>
            <input
              required='required'
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          <div>
            <label>금액</label>
            <input
              required='required'
              type='number'
              className='form-control'
              id='cost'
              value={cost}
              onChange={(e)=>{setCost(e.target.valueAsNumber)}}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <button type='submit' className='btn btn-primary mt-3'>추가</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddIncomeForm
