import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Modal from './components/Modal/Modal';
import Useeffect from './components/Modal/Useeffect'
import Usereducer from './components/Modal/Usereducer'
import Context from './components/Modal/Context';
import ComponentA from './components/Modal/ComponentA'
import Parent from './components/Modal/Parent';
import Appmovies from './components/Movies/Appmovies';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)



  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }


  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <Appmovies />
    </div>
  );
}

export default App;