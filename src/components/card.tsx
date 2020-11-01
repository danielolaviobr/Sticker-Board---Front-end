import React from "react";
import { CardPaper } from "../styles/components/card";

interface CardProps {
  cardText?: string;
}

const Card = (props: CardProps) => {
  return <CardPaper>{props.cardText}</CardPaper>;
};

export default Card;
