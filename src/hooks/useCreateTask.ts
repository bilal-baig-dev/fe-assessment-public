import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "src/interfaces/task-interface";
import { generateUniqueIds } from "src/utils";

const useCreateTask = () => {
  const [taskName, setTaskName] = useState<string | null | undefined>();
  const navigate = useNavigate();

  const addTask = useCallback(
    (name: any) => {
      if (!name?.length) {
        alert("Please enter task name");
        return;
      }

      let items: Task[] =
        JSON.parse(localStorage.getItem("tasks") as any) || [];
      items.push({
        id: generateUniqueIds(),
        name,
      });

      localStorage.setItem("tasks", JSON.stringify(items));
      navigate(`/list-tasks`);
    },
    [navigate]
  );

  const states = { taskName, setTaskName };

  const handlers = { addTask };

  return {
    states,
    handlers,
  };
};

export default useCreateTask;
