import * as React from "react";
import { BiAddToQueue } from "react-icons/bi";

interface NewToDoProps {
  onAddTodo: (title: string) => void;
}

function NewToDo({ onAddTodo }: NewToDoProps): JSX.Element {
  const [title, setTitle] = React.useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <>
      <form onSubmit={submitForm} className="mb-3">
        <ul className="list-group m-auto">
          <li className="list-group-item list-group-item-warning list-group-item-action d-flex flex-row justify-content-between align-items-center">
            <label htmlFor="title"></label>
            <input
              id="title"
              type="text"
              className="bg-transparent form-control border-0 p-0 shadow-none"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="btn">
              <BiAddToQueue />
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default NewToDo;
