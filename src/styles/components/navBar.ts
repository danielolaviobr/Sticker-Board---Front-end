import styled from "styled-components";

export const NavBarBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  background: #46c3d3;
`;

export const NavBarMenu = styled.div`
  display: flex;
  align-items: row;
  justify-content: start;

  height: 60px;
`;

export const NavBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 100px;

  font: 600 24px Montserrat, sans-serif;

  transition: background-color 0.2s;

  &:hover {
    background: rgba(77, 215, 234, 0.5);
    cursor: pointer;
  }
`;

export const NavBarSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 370px;
  height: 40px;

  background: #f2f2f2;
  border-radius: 5px;

  margin-right: 20px;
  padding-left: 10px;
`;

export const NavBarSearchInput = styled.input`
  width: 310px;
  height: 40px;

  margin-right: 10px;

  font: 400 14px Montserrat, sans-serif;

  background: #f2f2f2;
  border-radius: 5px;

  outline: none;
  border: none;

  &::placeholder {
    text-align: center;
    font: 400 16px Montserrat, sans-serif;
  }
`;
