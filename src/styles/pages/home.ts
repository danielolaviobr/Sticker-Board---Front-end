import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  height: 75vh;

  p {
    margin: 10px;
  }

  input {
    width: 310px;
    height: 40px;

    margin-top: 10px;

    font: 400 14px Montserrat, sans-serif;

    background: #ffffff;
    border-radius: 5px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;

    outline: none;
    border: none;

    &::placeholder {
      text-align: center;
      font: 400 16px Montserrat, sans-serif;
    }
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

    transition: 0.4s;

    &:hover {
      box-shadow: 0px 6px 8px 2px rgba(0, 0, 0, 0.25);
    }
  }
`;
