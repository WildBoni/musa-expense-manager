import { useRef } from "react"
// per leggere i valori del form posso usare useRef
// ricordiamoci di convertire in millisecondi!
// new Date(valore data del form).getTime()

export default function AddExpense({addExpense}) {
  const descriptionInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();

  function handleAddExpense(event) {
    event.preventDefault();
    let dateTimestamp = new Date(dateInput.current.value).getTime()
    addExpense({
      description: descriptionInput.current.value,
      amount: Number(amountInput.current.value),
      date: dateTimestamp
    })
  }

  return (
    <div className="bg-slate-200 pb-4">
      <h3>New expense</h3>
      <form action="">
        Description: <input type="text" ref={descriptionInput}/>
        Amount: <input type="text" ref={amountInput}/>
        Date: <input type="date" ref={dateInput}/>
        <button 
           className='bg-violet-200 hover:bg-violet-400 text-black px-4'
          onClick={(event) => handleAddExpense(event)}
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}