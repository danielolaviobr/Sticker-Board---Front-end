import styled from "styled-components";

export const CardPaper = styled.div`
  position: absolute;

  display: flex;
  align-items: column;
  justify-content: flex-end;

  top: 50px;
  left: 50px;

  width: 250px;
  height: 250px;

  background: #ffd466;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);

  cursor: grab;

  .close {
    padding-right: 8px;
    padding-top: 8px;
    cursor: pointer;
  }
`;

export const CardTextarea = styled.textarea`
  position: absolute;

  top: 35px;

  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;

  width: 100%;
  height: calc(100% - 35px);
  resize: none;

  background: transparent;

  border: none;
  outline: none;
`;
