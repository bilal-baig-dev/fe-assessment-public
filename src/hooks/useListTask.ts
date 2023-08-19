import React, { useCallback, useEffect, useState } from "react";
import { Task } from "src/interfaces/task-interface";

const useListTask = () => {
  const [tasks, setTask] = useState<Task[]>();

  const getAllTaskFromLocalStorage = useCallback(() => {
    const items: Task[] = JSON.parse(localStorage.getItem("tasks") as any);
    setTask(items);
  }, []);

  useEffect(() => {
    getAllTaskFromLocalStorage();
  }, [getAllTaskFromLocalStorage]);

  const states = {
    tasks,
  };
  const handlers = {};

  return {
    states,
    handlers,
  };
};

export default useListTask;
