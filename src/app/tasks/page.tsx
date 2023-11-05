"use client";

import { useEffect, useState } from "react";
import { initialState } from "@/infra/services/redux/config/store";
import { Task } from "@/domain/entities";
import {
  MakeDeleteTaskUseCase,
  makeCreateTaskUseCase,
  makeListTasksUseCase,
} from "@/main/factories";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";

export default function Tasks() {
  const createTaskUsecase = makeCreateTaskUseCase();
  const listTasksUsecase = makeListTasksUseCase();
  const deleteTaskUsecase = MakeDeleteTaskUseCase();

  const [tasks, setTasks] = useState(initialState.tasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = async () => {
    const lastTask = tasks[tasks.length - 1] || { id: 0 };
    const data = { id: lastTask.id + 1, description: newTask };
    await createTaskUsecase.execute(data);
    setNewTask("");
    loadTasks();
  };

  const loadTasks = async () => {
    const tasks = await listTasksUsecase.execute();
    const result = await tasks.map((task) => new Task(task));
    setTasks(result);
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDeleteTask(task: Task) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await deleteTaskUsecase.execute({ id: task.id });
    await loadTasks();
  }

  return (
    <Grid
      display={"flex"}
      container
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
      gap={"5vh"}
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={4}
        display={"flex"}
        flexDirection={"column"}
        gap={"2vh"}
      >
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={handleAddTask}>
          Add Task
        </Button>
      </Grid>

      <Grid item xs={8} sm={2}>
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          }}
        >
          {tasks.map((task, index) =>
            index < 5 ? (
              <FormControlLabel
                key={task.id}
                control={
                  <Checkbox
                    onClick={async () => await handleDeleteTask(task)}
                  />
                }
                label={task.description}
              />
            ) : null
          )}
        </FormGroup>
      </Grid>
    </Grid>
  );
}
