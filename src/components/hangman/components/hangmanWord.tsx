type HangmanWordProps = {
  selectedLetters: string[];
  mysteryWord: string;
  isLoser: () => boolean;
};

const HangmanWord = ({ selectedLetters, mysteryWord, isLoser }: HangmanWordProps) => {
  return (
    <div className="d-flex fs-1 fw-bold font-monospace text-uppercase gap-3 mb-5">
      {mysteryWord.split("").map((letter, index) => (
        <span className="border-bottom border-5 border-dark" key={index}>
          <span className={`${selectedLetters.includes(letter) || isLoser() ? "visible" : "invisible"} ${!selectedLetters.includes(letter) && "text-danger"} `}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
