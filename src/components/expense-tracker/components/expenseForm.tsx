import categories from "./expenseCategories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BiAddToQueue } from "react-icons/bi";
import { z } from "zod";

interface Props {
  onSubmit: (data: any) => void;
}

const expenseForm = ({ onSubmit }: Props) => {
  const schema = z.object({
    description: z.string().min(1).max(45),
    amount: z.number({ invalid_type_error: "The amount is required" }).min(0.01).max(100),
    category: z.enum(categories, {
      errorMap: () => ({ message: "The category is required." }),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  type ExpenseFormData = z.infer<typeof schema>;

  return (
    <div className="container mb-5">
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="d-flex flex-wrap align-content-between flex-row gap-2">
          <div className="col mb-3">
            <select {...register("category")} name="category" id="category" className="form-select">
              <option defaultValue={"category"}>Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <p>{errors.category.message}</p>}
          </div>
          <div className="col mb-3">
            <input {...register("description")} type="text" id="description" className="form-control" placeholder="Description" />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
          <div className="col mb-3">
            <input {...register("amount", { valueAsNumber: true })} type="number" id="amount" className="form-control" placeholder="Sek" />
            {errors.amount && <p>{errors.amount.message}</p>}
          </div>
        </div>
        <div className="row m-auto">
          <button className="btn btn-primary" type="submit" disabled={!isValid}>
            <BiAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
};

export default expenseForm;
