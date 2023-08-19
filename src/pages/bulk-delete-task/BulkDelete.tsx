import React from "react";
import useBulkDeleteTask from "src/hooks/useBulkDeleteTask";
import { Title, Card, Container, Input, Button } from "src/styles/common";
import styled from "styled-components";

const BulkDelete = () => {
  const { states, handlers } = useBulkDeleteTask();
  const { tasks } = states;
  const { handleCheckboxChange, handleDeleteCheckTasks } = handlers;
  return (
    <LayoutContainer>
      <Title>Bulk Delete Tasks</Title>
      {tasks?.map((elem, index) => (
        <React.Fragment key={index}>
          <Card>
            <CheckBox
              type="checkbox"
              checked={elem.checked}
              onChange={(e) => handleCheckboxChange(elem.id)}
            />
            <Text>{elem.name}</Text>
          </Card>
        </React.Fragment>
      ))}
      <DeleteButton onClick={handleDeleteCheckTasks}>
        Delete Checked Tasks
      </DeleteButton>
    </LayoutContainer>
  );
};

const DeleteButton = styled(Button)`
  width: 25%;
`;

const CheckBox = styled(Input)`
  height: 20px;
  width: 20px;
`;

const LayoutContainer = styled(Container)`
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
`;

export default React.memo(BulkDelete);
