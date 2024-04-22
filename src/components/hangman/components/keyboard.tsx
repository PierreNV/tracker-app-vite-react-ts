type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addSelectedLetter: (letter: string) => void;
};

const Keyboard = ({ activeLetters, inactiveLetters, disabled, addSelectedLetter }: KeyboardProps) => {
  const Chars = [...Array(26).keys()].map((i) => String.fromCharCode(i + 65));
  return (
    <div style={{ maxWidth: "500px", maxHeight: "300px" }} className="p-1 d-flex flex-wrap justify-content-center align-content-stretch text-uppercase gap-1">
      {Chars.map((char) => (
        <button
          key={char}
          type="button"
          className={`${activeLetters.includes(char) && "active"} ${inactiveLetters.includes(char) && "disabled"} btn btn-outline-primary btn-lg`}
          onClick={() => !disabled && addSelectedLetter(char)}
        >
          <span>{char}</span>
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
