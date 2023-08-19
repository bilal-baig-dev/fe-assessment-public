import React from "react";
import useListTask from "src/hooks/useListTask";
import { Card, Container, Title } from "src/styles/common";
import { styled } from "styled-components";

const ListTask = () => {
  const { states } = useListTask();
  const { tasks } = states;

  return (
    <LayoutContainer>
      <Title>Tasks List</Title>
      {tasks?.map((elem, index) => (
        <React.Fragment key={index}>
          <Card>{elem.name}</Card>
        </React.Fragment>
      ))}
    </LayoutContainer>
  );
};

const LayoutContainer = styled(Container)`
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`;

export default React.memo(ListTask);
