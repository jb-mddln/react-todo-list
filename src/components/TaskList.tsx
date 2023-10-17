import { FC } from "react";
import { Task } from "../models/Task";

interface Tasks {
  tasks: Task[];
}

export const TaskList: FC<Tasks> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
