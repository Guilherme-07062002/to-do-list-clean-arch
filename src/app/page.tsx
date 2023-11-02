"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { makeCreateTaskUseCase, makeListTasksUseCase } from "@/main/factories";
import { Task } from "@/domain/entities";
import { initialState } from "@/infra/services/redux/config/store";

export default function Home() {
  const createTaskUsecase = makeCreateTaskUseCase();
  const listTasksUsecase = makeListTasksUseCase();

  const [tasks, setTasks] = useState(initialState.tasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = async () => {
    const tasks = await listTasksUsecase.execute();
    await createTaskUsecase.execute({
      id: tasks.length + 1,
      description: newTask,
    });
    loadTasks();
  };

  const loadTasks = async () => {
    const tasks = await listTasksUsecase.execute();
    const result = tasks.map((task) => new Task(task));
    setTasks(result);
  };

  useEffect(() => {
    loadTasks();
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
