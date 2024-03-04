import {format} from 'date-fns'

export default function Expense({expense, deleteExpense}) {
  // devo fare un ciclo su tutte le spese FILTRATE e mostrare il componente Expense
  // mi arriva una prop con la data in millisecondi
  // 1709300406479
  let date = new Date(expense.date)
  // console.log(date) // Tue Jun 23 1992 13:24:11 GMT+0200 (Central European Summer Time)
  let formattedDate = format(date, 'dd MMM yyyy')

  function handleDeleteExpense(id) {
    deleteExpense(id)
  }
  
  return (
    <article className='bg-violet-800 flex gap-6 text-white my-4 py-4'>
      <div>{formattedDate}</div>
      <p>{expense.description}</p>
      <h2>{expense.amount}</h2>
      <button 
        className='bg-violet-200 hover:bg-violet-400 text-black px-4'
        onClick={() => handleDeleteExpense(expense.id)}
      >
        X
      </button>
    </article>
  )
}