import { useEffect, useState } from "react";
import NewToDo from "./components/newToDo";
import ToDoList from "./components/toDoList";
import ToDo from "./models/toDo";
import toDoService from "./services/toDoService";

const ToDoTracker = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    loadToDos();
  }, []);

  const loadToDos = async () => {
    const placeholders = await toDoService.getToDos();
    setToDos(placeholders);
  };

  const removeToDo = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id != id));
  };

  const addToDo = async (title: string) => {
    const newToDo = await toDoService.addToDo(title);
    setToDos([newToDo, ...toDos]);
  };

  return (
    <>
      <div className="container text-center mb-5">
        <h1>To Do List</h1>
      </div>
      <div className="container mb-5">
        <div className="container">
          <NewToDo onAddTodo={addToDo} />
        </div>
        <div className="container">
          <ToDoList items={toDos} onRemoveToDo={removeToDo} />
        </div>
      </div>
    </>
  );
};

export default ToDoTracker;
