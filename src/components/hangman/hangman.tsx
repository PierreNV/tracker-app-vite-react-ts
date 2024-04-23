import { useCallback, useState } from "react";
import { generate as generateWord } from "random-words";
import HangmanDrawing from "./components/hangmanDrawing";
import HangmanWord from "./components/hangmanWord";
import Keyboard from "./components/keyboard";

const generateSingleWord = (): string => generateWord().toString().toUpperCase();

const Hangman = () => {
  const [mysteryWord, setMysteryWord] = useState(() => {
    return generateSingleWord();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = (): string[] => selectedLetters.filter((letter) => !mysteryWord.includes(letter));
  const correctLetters = (): string[] => selectedLetters.filter((letter) => mysteryWord.includes(letter));

  const isLoser = (): boolean => incorrectLetters().length >= 6;
  const isWinnner = (): boolean => mysteryWord.split("").every((letter) => selectedLetters.includes(letter));
  const resetStates = (): void => {
    setMysteryWord(() => generateSingleWord());
    setSelectedLetters(() => []);
  };

  const addSelectedLetter = useCallback(
    (letter: string) => {
      if (selectedLetters.includes(letter)) {
        return;
      } else {
        setSelectedLetters((currentSelectedLetters) => [...currentSelectedLetters, letter]);
      }
    },
    [selectedLetters]
  );

  return (
    <div className="container text-center mb-5 d-flex flex-column mx-auto align-items-center">
      <div className="text-center text-uppercase mb-5 d-flex flex-column">
        {isLoser() && (
          <button
            onClick={() => {
              resetStates();
            }}
            className="btn btn-lg btn-danger"
          >
            Good try but you loose, refresh.
          </button>
        )}
        {isWinnner() && (
          <button
            onClick={() => {
              resetStates();
            }}
            className="btn btn-lg btn-success"
          >
            Well done, refresh.
          </button>
        )}
      </div>
      <HangmanDrawing numberOfIncorrectLetters={incorrectLetters().length} />
      <HangmanWord selectedLetters={selectedLetters} mysteryWord={mysteryWord} />
      <Keyboard activeLetters={correctLetters()} inactiveLetters={incorrectLetters()} addSelectedLetter={addSelectedLetter} disabled={isLoser()} />
    </div>
  );
};

export default Hangman;
