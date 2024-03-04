import { useRef } from "react"

export default function FilterExpense({setDateFilter}) {
  const startDateInput = useRef();
  const endDateInput = useRef();
  
  function handleSetDateFilter() {
    // leggo il valore dei 2 input di data
    // trasformo il valore in timestamp
    let startDateTimestamp = new Date(startDateInput.current.value).getTime()
    let endDateTimestamp = new Date(endDateInput.current.value).getTime()
    // chiamo setDateFilter per aggiornare lo stato dei filtri
    setDateFilter({
      startDate: startDateTimestamp,
      endDate: endDateTimestamp
    })
  }

  function handleResetFilter() {
    // svuota i campi di input delle date
    startDateInput.current.value = ''
    endDateInput.current.value = ''
    // mette lo stato del filtro a null
    setDateFilter({
      startDate: null,
      endDate: null
    })
  }
  
  return (
    <div className="bg-teal-100 p-4">
      Start: <input type='date' ref={startDateInput}/>
      End: <input type='date'ref={endDateInput}/>
      <button 
        className='bg-violet-200 hover:bg-violet-400 text-black px-4'
        onClick={() => handleSetDateFilter()}
      >
        Filter expenses
      </button>
      <button 
        className='bg-violet-200 hover:bg-violet-400 text-black px-4'
        onClick={() => handleResetFilter()}
      >
        Reset filter
      </button>
    </div>
  )
}