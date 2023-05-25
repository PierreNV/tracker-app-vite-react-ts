import categories from "./expenseCategories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="container mb-2">
      <select name="expenseFilter" id="expenseFilter" className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
