import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface ICard {
  id: number;
  value: number;
  image: string;
}

export default function App() {
  const [cards, setCards] = useState<ICard[]>([
    { id: 1, value: 1, image: "analise.png" },
    { id: 2, value: 2, image: "buddywapple.png" },
    { id: 3, value: 3, image: "cheap.jpg" },
    { id: 4, value: 4, image: "cinema.png" },
    { id: 5, value: 5, image: "dogefuckup.png" },
    { id: 6, value: 6, image: "micoladraosafado.jpg" },
    { id: 7, value: 7, image: "image.png" },
    { id: 8, value: 8, image: "kekwait.png" },
    { id: 9, value: 9, image: "m13l.jpg" },
    { id: 10, value: 10, image: "mikebruh.png" },
    { id: 11, value: 11, image: "monke.png" },
    { id: 12, value: 12, image: "nanda.png" },
    { id: 13, value: 13, image: "peter.png" },
    { id: 14, value: 14, image: "sadge.png" },
    { id: 15, value: 15, image: "sticker.webp" },
    { id: 16, value: 16, image: "weirdge.png" },
    { id: 17, value: 1, image: "analise.png" },
    { id: 18, value: 2, image: "buddywapple.png" },
    { id: 19, value: 3, image: "cheap.jpg" },
    { id: 20, value: 4, image: "cinema.png" },
    { id: 21, value: 5, image: "dogefuckup.png" },
    { id: 22, value: 6, image: "micoladraosafado.jpg" },
    { id: 23, value: 7, image: "image.png" },
    { id: 24, value: 8, image: "kekwait.png" },
    { id: 25, value: 9, image: "m13l.jpg" },
    { id: 26, value: 10, image: "mikebruh.png" },
    { id: 27, value: 11, image: "monke.png" },
    { id: 28, value: 12, image: "nanda.png" },
    { id: 29, value: 13, image: "peter.png" },
    { id: 30, value: 14, image: "sadge.png" },
    { id: 31, value: 15, image: "sticker.webp" },
    { id: 32, value: 16, image: "weirdge.png" },
  ]);
  const [flippedCards, setFlippedCards] = useState<ICard[]>([]);
  const [matchedCards, setMatchedCards] = useState<ICard[]>([]);

  function shuffleCards(array: ICard[]): void {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setCards(newArray);
  }

  useEffect(() => {
    shuffleCards([...cards]);
  }, []);

  function flipCard(card: ICard): void {
    if (flippedCards.length >= 2 || flippedCards.includes(card) || matchedCards.includes(card)) return;

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].value === newFlippedCards[1].value) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }

  return (
    <>
      <h1 className="text-5xl">Memory Game</h1>
      <main className="grid grid-cols-4 grid-rows-8 md:grid-cols-8 md:grid-rows-4 gap-1 p-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) || matchedCards.includes(card) ? "flipped" : ""}`}
            onClick={() => flipCard(card)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src="fish.png"
                  className="w-[100px] h-[100px] rounded-md"
                  alt="Card back"
                />
              </div>
              <div className="card-back">
                <img
                  src={card.image}
                  className="w-[100px] h-[100px] rounded-md"
                  alt={`Card ${card.value}`}
                />
              </div>
            </div>
          </div>
        ))}
      </main>
      <button
        onClick={() => {
          shuffleCards([...cards]);
          setFlippedCards([]);
          setMatchedCards([]);
        }}
      >
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </>
  );
}