import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavBar from "../components/navBar";

import SitckerBoardLogo from "../assets/sticker_board.svg";
import { HomeWrapper } from "../styles/pages/home";
import api from "../services/api";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [boardName, setBoardName] = useState("");
  const router = useRouter();

  function handleSearchSend() {
    router.push(`/${searchText}`);
    setSearchText("");
  }

  function handleSearchTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  async function handleCreateBoard() {
    if (boardName !== "") {
      router.push(`/${boardName}`);
      return;
    }
    api.post("/board", { notes: [] }).then(response => {
      const { board_code } = response.data;
      router.push(`/${board_code}`);
      return;
    });
  }

  return (
    <div>
      <Head>
        <title>Sticker Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar
          {...{
            menus: [],
            search: searchText,
            searchChange: handleSearchTextChange,
            searchSend: handleSearchSend
          }}
        />
        <HomeWrapper>
          <SitckerBoardLogo />
          <p>Name your board, or just click go</p>
          <input
            type="text"
            placeholder="Name your board"
            value={boardName}
            onChange={event => setBoardName(event.target.value)}
          ></input>
          <button onClick={handleCreateBoard}>Go</button>
        </HomeWrapper>
      </main>
    </div>
  );
}
