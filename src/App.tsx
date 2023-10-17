import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskFormAdd from "./components/TaskFormAdd";
import { Task } from "./models/Task";

function App() {
  const initialTasks = [
    { id: 1, text: "Tâche 1", completed: false },
    { id: 2, text: "Tâche 2", completed: true },
    { id: 3, text: "Tâche 3", completed: false },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (text: string) => {
    const newTask:Task = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <h1>Liste des tâches</h1>
      <TaskList tasks={tasks} />
      <TaskFormAdd onAddTask={addTask} />
    </div>
  );
}

export default App;
