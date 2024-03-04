export default function TotalExpense({expenses}) {
  // può essere utile fare reduce()
  let total = expenses.reduce((sum, expense) => {
    return expense.amount + sum;
  }, 0)
  
  return (
    <div>
      Total: {total} €
    </div>
  )
}