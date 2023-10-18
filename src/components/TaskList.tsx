import { useState } from "react";
import { Task } from "../models/Task";
import TaskFormAdd from "./TaskFormAdd";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Tâche 1", completed: false },
    { id: 2, text: "Tâche 2", completed: true },
    { id: 3, text: "Tâche 3", completed: false },
  ]);

  const addTask = (data: Task): void => {
    setTasks([...tasks, data]);
  };

  const handleTaskSpanClick = (idTask: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === idTask ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDeleteClick = (idTask: number): void => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };

  return (
    <div className="container">
          <h1>Liste des tâches</h1>
      <TaskFormAdd onAddTask={addTask} />
      <>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <span onClick={() => handleTaskSpanClick(task.id)}>
                {task.text}
              </span>
              <button onClick={() => handleTaskDeleteClick(task.id)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default TaskList;
