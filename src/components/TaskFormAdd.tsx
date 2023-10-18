import React, { useState } from "react";
import { Task } from "../models/Task";

interface TaskFormAddProps {
  onAddTask: (task: Task) => void;
}

export const TaskFormAdd: React.FC<TaskFormAddProps> = ({ onAddTask }) => {
  const task: Task = {
    id: Date.now(),
    text: "",
    completed: false,
  };

  const [newTask, setNewTask] = useState<Task>(task);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setNewTask({ ...newTask, text: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.text === "")
        return;
    onAddTask(newTask);
    setNewTask(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={newTask.text}
        onChange={handleInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskFormAdd;
