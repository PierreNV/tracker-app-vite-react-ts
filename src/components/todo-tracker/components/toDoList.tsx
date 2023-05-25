import React from "react";
import ToDoItem from "./toDoItem";
import ToDo from "../models/toDo";

interface ToDoListProps {
  items: ToDo[];
  onRemoveToDo: (id: number) => void;
}

const ToDoList = ({ items, onRemoveToDo }: ToDoListProps) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <ToDoItem id={item.id} title={item.title} completed={item.completed} onRemoveToDo={onRemoveToDo} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
