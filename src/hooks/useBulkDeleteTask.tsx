import React, { useCallback, useEffect, useState } from "react";
import { Task } from "src/interfaces/task-interface";

interface TaskWithCheckBoxProps extends Task {
  checked: boolean;
}

const useBulkDeleteTask = () => {
  const [tasks, setTasks] = useState<TaskWithCheckBoxProps[]>();

  const getAllTaskFromLocalStorage = useCallback(() => {
    const items: TaskWithCheckBoxProps[] = JSON.parse(
      localStorage.getItem("tasks") as any
    );
    const taskWithCheckItemsList = items.map((elem) => {
      return {
        ...elem,
        checked: false,
      };
    });
    setTasks(taskWithCheckItemsList);
  }, []);

  const handleCheckboxChange = useCallback((taskId: string) => {
    setTasks((prevTasks: any) =>
      prevTasks.map((task: any) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  }, []);

  const handleDeleteCheckTasks = useCallback(() => {
    const filteredUnCheckedTasks = tasks?.filter((task) => !task.checked);
    setTasks(filteredUnCheckedTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredUnCheckedTasks));
  }, [tasks]);

  useEffect(() => {
    getAllTaskFromLocalStorage();
  }, [getAllTaskFromLocalStorage]);

  const states = {
    tasks,
  };
  const handlers = { handleCheckboxChange, handleDeleteCheckTasks };

  return {
    states,
    handlers,
  };
};

export default useBulkDeleteTask;
