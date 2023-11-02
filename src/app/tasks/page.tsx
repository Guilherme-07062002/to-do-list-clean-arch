"use client";

import { Task } from "@/domain/entities";
import { useEffect, useState } from "react";
import {
  MakeDeleteTaskUseCase,
  makeCreateTaskUseCase,
  makeListTasksUseCase,
} from "@/main/factories";
import { initialState } from "@/infra/services/redux/config/store";
import DeleteIcon from "@mui/icons-material/Delete";

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
    const data = { id: tasks.length + 1, description: newTask };
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
    console.log("deleta " + JSON.stringify(task));
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
      height={"100vh"}
      gap={"5%"}
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

      <Grid item xs={12} sm={2}>
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
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
