import { Routes, Route, Navigate } from "react-router-dom";
import ExpenseTracker from "./components/expense-tracker/expenseTracker";
import ToDoTracker from "./components/todo-tracker/toDoTracker";
import NavTab from "./components/navTab";
import NotFound from "./components/notFound";
import Home from "./components/home";

function App() {
  return (
    <div>
      <div className="mb-3">
        <NavTab />
      </div>
      <main className="container-xxl mb-3">
        <Routes>
          <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/todo" element={<ToDoTracker />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
