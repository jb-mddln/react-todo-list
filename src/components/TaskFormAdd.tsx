import React, { useState } from "react";

interface TaskFormAddProps {
  onAddTask: (text: string) => void;
}

export const TaskFormAdd: React.FC<TaskFormAddProps> = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(newTaskText);
    setNewTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskFormAdd;
