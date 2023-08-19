import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #c3bfbf;
  border-radius: 20px;
  width: 25%;
  height: 60px;
`;

export const Title = styled.h3``;

export const Input = styled.input`
  background: #ffffff;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 12px;
  height: 50px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #4285f4;
  color: #fff;
  padding: 16px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
