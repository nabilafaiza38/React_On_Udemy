import React, {useState} from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const TextChangeHandler=(event)=> {
    setTitle(event.target.value)
      // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
   }
   const DateChangeHandler=(event)=> {
    setDate(event.target.value)
   }
   const AmountChangeHandler=(event)=> {
    setAmount(event.target.value)
     // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
   }

  const [enteredTitle, setTitle]=useState('')
  const [enteredDate, setDate]=useState('')
  const [enteredAmount, setAmount]=useState('')
   // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

   const SubmitHandle= (event)  => {
    event.preventDefault();
    const ExpenseData ={
      title:enteredTitle,
      Date:enteredDate,
      emount:enteredAmount
    }
    
  props.onSaveExpenseData(ExpenseData);
  setTitle('');
  setAmount('');
  setDate('');
}
  return (
    <form onSubmit={SubmitHandle}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={TextChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={AmountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;