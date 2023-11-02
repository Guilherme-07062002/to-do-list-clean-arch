"use client";

import { Task } from "@/domain/entities";
import { useEffect, useState } from "react";
import { makeCreateTaskUseCase, makeListTasksUseCase } from "@/main/factories";
import { initialState } from "@/infra/services/redux/config/store";

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

  function handleCheckboxClick(task: Task): void {
    console.log(task);
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

      <Grid item xs={12} sm={2} display={"flex"} flexDirection={"column"} justifyContent={'center'} alignItems={'center'}>
        <FormGroup>
          {tasks.map((task, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox onChange={() => handleCheckboxClick(task)} />}
              label={task.description}
            />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
}
