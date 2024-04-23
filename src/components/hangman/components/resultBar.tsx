type ResultBarProps = {
  isLoser: () => boolean;
  isWinnner: () => boolean;
  resetStates: () => void;
};

const ResultBar = ({ isLoser, isWinnner, resetStates }: ResultBarProps) => {
  return (
    <div style={{ width: "250px", height: "40px" }} className="text-center text-uppercase mb-3 d-flex flex-column">
      {isLoser() && (
        <button
          onClick={() => {
            resetStates();
          }}
          className="btn btn-danger"
        >
          Good try but you loose, refresh.
        </button>
      )}
      {isWinnner() && (
        <button
          onClick={() => {
            resetStates();
          }}
          className="btn btn-success"
        >
          Well done, refresh.
        </button>
      )}
    </div>
  );
};

export default ResultBar;
