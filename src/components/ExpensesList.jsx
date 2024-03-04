import Expense from "./Expense"

export default function ExpensesList({expenses, deleteExpense}) {
  let expensesList = expenses.map(expense => 
    <Expense expense={expense} deleteExpense={deleteExpense} key={expense.id}/>
  )
  
  return (
    <>
      <h3>Expenses:</h3>
      {expensesList}
    </>
  )
}