import Head from "next/head";
import React, { useEffect, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useRouter } from "next/router";
import { Plus, X } from "react-feather";
import { uuid } from "uuidv4";

import { BoardWrapper } from "../styles/pages/board";
import NavBar from "../components/navBar";
import { CardPaper, CardTextarea } from "../styles/components/card";
import { AddButton } from "../styles/components/addButton";
import api from "../services/api";

interface CardData {
  note_id: string;
  note_text: string;
  position_x: number;
  position_y: number;
}

export default function Board() {
  const [searchText, setSearchText] = useState("");
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [boardCode, setBoardCode] = useState("");
  const router = useRouter();
  const { id } = router.query;

  function handleCreateNewCard() {
    const newCard = {
      note_id: uuid(),
      note_text: "",
      position_x: 0,
      position_y: 0
    };
    setCardsData([...cardsData, newCard]);
  }

  function handleSearchTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function handleRemoveCard(id: string) {
    const cardIndex = cardsData.findIndex(card => card.note_id === id);

    if (cardIndex === -1) {
      return;
    }

    const newCardsData = cardsData;

    newCardsData.splice(cardIndex, 1);

    setCardsData([...newCardsData]);
  }

  function handleSearchSend() {
    router.push(`/${searchText}`);
    setSearchText("");
  }

  function handleDrag(e: DraggableEvent, ui: DraggableData, id: string) {
    const cardIndex = cardsData.findIndex(card => card.note_id === id);

    if (cardIndex === -1) {
      return;
    }

    const cardToUpdate = cardsData[cardIndex];

    cardToUpdate.position_x = ui.x;
    cardToUpdate.position_y = ui.y;

    const newCardsData = cardsData;

    newCardsData.splice(cardIndex, 1);

    setCardsData([...newCardsData, cardToUpdate]);
  }

  async function handleMenuAction(menu: string) {
    if (menu === "Save") {
      await api.post(`board/${boardCode}`, { notes: cardsData });
    } else if (menu === "Home") {
      router.push("/");
    }
  }

  function handleCardUpdate(id: string, text: string) {
    const cardIndex = cardsData.findIndex(card => card.note_id === id);

    const newCardsData = cardsData;

    newCardsData[cardIndex].note_text = text;

    setCardsData([...newCardsData]);
  }

  useEffect(() => {
    if (typeof id === "string") {
      setBoardCode(id);

      api
        .get(`board/${id}`)
        .then(response => {
          const { notes } = response.data;

          setCardsData([...notes]);
        })
        .catch(err => {
          const { status } = err.response;
          if (status === 404) {
            router.push("/404");
          }
        });
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>Sticker Board - {boardCode}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar
          {...{
            menus: ["Home", "Save"],
            search: searchText,
            searchChange: handleSearchTextChange,
            searchSend: handleSearchSend,
            handleMenuAction: handleMenuAction
          }}
        />
        <BoardWrapper>
          {cardsData.map(card => {
            return (
              <Draggable
                key={card.note_id}
                bounds="parent"
                defaultPosition={{ x: card.position_x, y: card.position_y }}
                onDrag={(e, ui) => {
                  handleDrag(e, ui, card.note_id);
                }}
              >
                <CardPaper>
                  <X
                    className="close"
                    onClick={() => handleRemoveCard(card.note_id)}
                  />
                  <CardTextarea
                    placeholder="Write your notes"
                    value={card.note_text}
                    onChange={event => {
                      handleCardUpdate(card.note_id, event.target.value);
                    }}
                  />
                </CardPaper>
              </Draggable>
            );
          })}
        </BoardWrapper>
        <AddButton onClick={handleCreateNewCard}>
          <Plus color="#f2f2f2" size="40" />
        </AddButton>
      </main>
    </div>
  );
}
