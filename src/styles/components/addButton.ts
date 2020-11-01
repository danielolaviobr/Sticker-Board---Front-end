import styled from "styled-components";

export const AddButton = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  background: #46c3d3;
  box-shadow: 0px 5px 10px 2px rgba(51, 51, 51, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  cursor: pointer;

  &:active {
    background: rgba(77, 215, 234, 1);
    box-shadow: 0px 2px 8px 2px rgba(51, 51, 51, 0.25);
  }
`;
