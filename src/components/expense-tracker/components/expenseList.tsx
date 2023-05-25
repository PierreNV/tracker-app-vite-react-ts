import { BsTrash } from "react-icons/bs";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="container">
      <div className="table-responsive-sm mb-5">
        <table className="table table-sm align-middle border">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount} sek</td>
                <td>{expense.category}</td>
                <td className="d-flex justify-content-end">
                  <button className="btn" onClick={() => onDelete(expense.id)}>
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)} sek</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
