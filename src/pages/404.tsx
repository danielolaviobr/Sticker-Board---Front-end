import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavBar from "../components/navBar";

import { ErrorPageWrapper } from "../styles/pages/404";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSearchSend() {
    router.push(`/${searchText}`);
    setSearchText("");
  }

  function handleSearchTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  async function handleMenuAction(menu: string) {
    if (menu === "Home") {
      router.push("/");
    }
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
            menus: ["Home"],
            search: searchText,
            searchChange: handleSearchTextChange,
            searchSend: handleSearchSend,
            handleMenuAction: handleMenuAction
          }}
        />
        <ErrorPageWrapper>
          <h1>404</h1>
          <p>Page not found, return to home</p>
          <button onClick={() => router.push("/")}>Home</button>
        </ErrorPageWrapper>
      </main>
    </div>
  );
}
