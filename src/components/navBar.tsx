import React from "react";

import {
  NavBarBody,
  NavBarItem,
  NavBarMenu,
  NavBarSearch,
  NavBarSearchInput
} from "../styles/components/navBar";

import { Search } from "react-feather";

interface NavBarProps {
  menus: string[];
  search: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchSend: () => void;
  handleMenuAction?: (action: string) => void;
}

const NavBar = (props: NavBarProps) => {
  return (
    <NavBarBody>
      <NavBarMenu>
        {props.menus.map(menu => {
          return (
            <NavBarItem
              key={menu}
              onClick={() => {
                props.handleMenuAction(menu);
              }}
            >
              {menu}
            </NavBarItem>
          );
        })}
      </NavBarMenu>
      <NavBarSearch>
        <NavBarSearchInput
          placeholder="Search"
          value={props.search}
          onChange={props.searchChange}
        />
        <Search onClick={props.searchSend} cursor="pointer" />
      </NavBarSearch>
    </NavBarBody>
  );
};

export default NavBar;
