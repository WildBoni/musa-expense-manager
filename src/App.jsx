import { useState, useEffect } from "react"
import {nanoid} from 'nanoid'
import ExpensesList from "./components/ExpensesList"
import TotalExpense from "./components/TotalExpense"
import AddExpense from "./components/AddExpense"
import FilterExpense from "./components/FilterExpense"
// nanoid per creare id delle spese
// data è il timestamp
// anzichè partire con l'array expenses, vado a vedere in localStorage se ci sono delle spese
// quando creo o elimino una spesa, devo sincronizzare localStorage
// usate tailwind e daisyUI per l'interfaccia

// let expenses = [
//   {
//     id: '2314423',
//     description: 'comprato pc',
//     amount: 99,
//     date: 709298651778
//   },
//   {
//     id: '2311229',
//     description: 'comprato smartphone',
//     amount: 1500,
//     date: 509298651778
//   }
// ]
let expenses = JSON.parse(localStorage.getItem('expenses')) || []

function App() {
  const [myExpenses, setMyExpenses] = useState(expenses)
  // dentro a questo state, le date vanno salvate in millisecondi
  const [dateFilter, setDateFilter] = useState({
    startDate: null,
    endDate: null
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(myExpenses))
  },
  [myExpenses])

  // logica per filtrare:
  // guardo la data di inizio e la data di fine del filtro
  let filteredExpense = myExpenses.filter(expense => {
    if(dateFilter.startDate && dateFilter.endDate) {
      if(expense.date >= dateFilter.startDate && expense.date <= dateFilter.endDate) {
        return expense
      }
    } else {
      return expense
    }
  })

  function deleteExpense(idToDelete) {
    let updatedExpenses = myExpenses.filter(expense => 
      expense.id !== idToDelete
    );
    setMyExpenses(updatedExpenses);
  }

  function addExpense(expense) {
    let newExpense = {
      ...expense,
      id: nanoid()
    }
    let updatedExpenses = [...myExpenses, newExpense];
    // aggiorno l'elenco dei task con il nuovo array
    setMyExpenses(updatedExpenses);
  }
  
  function editExpense(expenseToEdit) {
    // fai un ciclo dentro all'array myExpenses
    // trovi in base a expenseToEdit.id la spesa che vuoi aggiornare
    // modifichi la spesa che hai trovato passando i valori che hai preso dal form
    // aggiorni lo stato dell'array myExpenses 
    // setMyExpenses(updatedExpenses);
  }

  return (
    <>
      <AddExpense addExpense={addExpense}/>
      <FilterExpense setDateFilter={setDateFilter}/>
      <ExpensesList expenses={filteredExpense} deleteExpense={deleteExpense}/>
      <TotalExpense expenses={filteredExpense}/>
    </>
  )
}

export default App
