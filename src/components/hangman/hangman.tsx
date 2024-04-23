import { useCallback, useState } from "react";
import { generate as generateWord } from "random-words";

import HangmanDrawing from "./components/hangmanDrawing";
import HangmanWord from "./components/hangmanWord";
import Keyboard from "./components/keyboard";
import ResultBar from "./components/resultBar";

const generateSingleWord = (): string => generateWord().toString().toUpperCase();

const Hangman = () => {
  const [mysteryWord, setMysteryWord] = useState(() => {
    return generateSingleWord();
  });

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  const incorrectLetters = (): string[] => selectedLetters.filter((letter) => !mysteryWord.includes(letter));
  const correctLetters = (): string[] => selectedLetters.filter((letter) => mysteryWord.includes(letter));

  const isLoser = () => incorrectLetters().length >= 6;
  const isWinnner = () => mysteryWord.split("").every((letter) => selectedLetters.includes(letter));
  const resetStates = () => {
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
    <div className="text-center d-flex flex-column mx-auto align-items-center">
      <ResultBar isLoser={isLoser} isWinnner={isWinnner} resetStates={resetStates} />
      <HangmanDrawing numberOfIncorrectLetters={incorrectLetters().length} />
      <HangmanWord selectedLetters={selectedLetters} mysteryWord={mysteryWord} isLoser={isLoser} />
      <Keyboard activeLetters={correctLetters()} inactiveLetters={incorrectLetters()} addSelectedLetter={addSelectedLetter} disabled={isLoser()} />
    </div>
  );
};

export default Hangman;
