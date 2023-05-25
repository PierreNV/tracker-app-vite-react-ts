import { useState } from "react";
import { BsTrash, BsCheckCircle, BsXCircle } from "react-icons/bs";

interface ToDoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onRemoveToDo: (id: number) => void;
}

const ToDoItem = ({ id, title, onRemoveToDo, completed }: ToDoItemProps) => {
  const [checked, setchecked] = useState(completed);

  const checkToDo = () => {
    setchecked(!checked);
  };

  return (
    <li className={`${checked ? `list-group-item-success` : `list-group-item-warning`} + list-group-item d-flex flex-row justify-content-between align-items-center`}>
      {title}
      <div className="d-flex flex-row flex-nowrap">
        <button className="btn" onClick={() => checkToDo()}>
          {checked ? <BsXCircle /> : <BsCheckCircle />}
        </button>
        <button className="btn" onClick={() => onRemoveToDo(id)}>
          <BsTrash />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
