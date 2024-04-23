type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled: boolean;
  addSelectedLetter: (letter: string) => void;
};

const Keyboard = ({ activeLetters, inactiveLetters, disabled, addSelectedLetter }: KeyboardProps) => {
  const Chars = [...Array(26).keys()].map((i) => String.fromCharCode(i + 65));
  return (
    <div style={{ maxWidth: "540px" }} className="d-flex flex-wrap text-uppercase justify-content-center gap-1" autoFocus>
      {Chars.map((char) => (
        <button
          style={{ minWidth: "50px" }}
          key={char}
          type="button"
          className={`${activeLetters.includes(char) && "active"} ${inactiveLetters.includes(char) && "disabled"} p-0 btn btn-outline-primary`}
          onClick={() => !disabled && addSelectedLetter(char)}
        >
          <span>{char}</span>
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
