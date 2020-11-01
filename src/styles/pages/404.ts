import styled from "styled-components";

export const ErrorPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  height: 75vh;

  h1 {
    font-size: 180px;
  }

  button {
    width: 250px;
    height: 40px;
    border-radius: 5px;

    margin-top: 30px;

    background: #ffd466;
    font: 500 20px Montserrat, sans-serif;

    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);

    outline: none;
    border: none;

    cursor: pointer;

    transition: 0.4s;

    &:hover {
      box-shadow: 0px 6px 8px 2px rgba(0, 0, 0, 0.25);
    }
  }
`;
