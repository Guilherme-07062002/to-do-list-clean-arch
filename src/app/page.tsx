"use client";

import styles from "./page.module.css";
import { Task } from "@/domain/entities";
import { useEffect, useState } from "react";
import { makeCreateTaskUseCase, makeListTasksUseCase } from "@/main/factories";
import { initialState } from "@/infra/services/redux/config/store";

export default function Home() {
  const createTaskUsecase = makeCreateTaskUseCase();
  const listTasksUsecase = makeListTasksUseCase();

  const [tasks, setTasks] = useState(initialState.tasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = async () => {
    const data = { id: tasks.length + 1, description: newTask };
    await createTaskUsecase.execute(data);
    loadTasks();
  };

  const loadTasks = async () => {
    const tasks = await listTasksUsecase.execute();
    const result = tasks.map((task) => new Task(task));
    setTasks(result);
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            {task.description}
          </div>
        ))}
      </div>
    </main>
  );
}
