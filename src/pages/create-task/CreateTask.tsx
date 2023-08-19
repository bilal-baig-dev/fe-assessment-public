import React from "react";
import useCreateTask from "src/hooks/useCreateTask";
import { Button, Container, Input, Title } from "src/styles/common";
import styled from "styled-components";

const CreateTask = () => {
  const { states, handlers } = useCreateTask();

  const { taskName, setTaskName } = states;
  const { addTask } = handlers;

  return (
    <Container>
      <Box>
        <Title>Create Task</Title>

        <Input
          placeholder="Add Task Name"
          type="text"
          onChange={(e) => setTaskName(e?.target.value)}
        />
        <Button onClick={(e) => addTask(taskName)}>Create Task</Button>
      </Box>
    </Container>
  );
};

const Box = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
  padding: 30px;
  margin: 20px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
`;

export default React.memo(CreateTask);
