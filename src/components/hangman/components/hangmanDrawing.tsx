const Head = <div key={0} style={{ width: "5vh", height: "5vh", borderRadius: "100%", border: "1vh solid black", position: "absolute", top: "5vh", right: "-2vh" }} />;
const Body = <div key={1} style={{ position: "absolute", height: "5vh", width: "1vh", background: "black", top: "10vh", right: "0" }} />;
const RightArm = <div key={2} style={{ position: "absolute", height: "1vh", width: "4vh", background: "black", top: "11vh", right: "-3vh", rotate: "0", transformOrigin: "" }} />;
const LeftArm = <div key={3} style={{ position: "absolute", height: "1vh", width: "4vh", background: "black", top: "11vh", right: "0vh", rotate: "0", transformOrigin: "" }} />;
const rightLeg = (
  <div key={4} style={{ position: "absolute", height: "1vh", width: "6vh", background: "black", top: "14vh", right: "-5vh", rotate: "60deg", transformOrigin: "left bottom" }} />
);
const leftLeg = (
  <div key={5} style={{ position: "absolute", height: "1vh", width: "6vh", background: "black", top: "14vh", right: "0", rotate: "-60deg", transformOrigin: "right bottom" }} />
);
const Stand = (
  <>
    <div style={{ position: "absolute", height: "5vh", width: "1vh", background: "black", top: "0", right: "0" }} />
    <div style={{ position: "absolute", height: "1vh", width: "50%", background: "black", right: "0" }} />
    <div style={{ height: "30vh", width: "1vh", background: "black", margin: "auto" }} />
    <div style={{ height: "1vh", width: "20vw", background: "black" }} />
  </>
);

const bodyParts = [Head, Body, RightArm, LeftArm, rightLeg, leftLeg];

type HangmanDrawingProps = { numberOfIncorrectLetters: number };

const HangmanDrawing = ({ numberOfIncorrectLetters }: HangmanDrawingProps) => {
  return (
    <div className="position-relative mb-5">
      {bodyParts.slice(0, numberOfIncorrectLetters)} {Stand}
    </div>
  );
};

export default HangmanDrawing;
