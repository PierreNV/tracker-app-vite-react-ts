const Head = <div key={0} style={{ width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "40px", right: "-20px" }} />;
const Body = <div key={1} style={{ position: "absolute", height: "100px", width: "10px", background: "black", top: "80px", right: "0" }} />;
const RightArm = (
  <div
    key={2}
    style={{ position: "absolute", height: "10px", width: "80px", background: "black", top: "110px", right: "-75px", rotate: "-30deg", transformOrigin: "left bottom" }}
  />
);
const LeftArm = (
  <div key={3} style={{ position: "absolute", height: "10px", width: "80px", background: "black", top: "110px", right: "5px", rotate: "30deg", transformOrigin: "right bottom" }} />
);
const rightLeg = (
  <div
    key={4}
    style={{ position: "absolute", height: "10px", width: "80px", background: "black", top: "165px", right: "-70px", rotate: "60deg", transformOrigin: "left bottom" }}
  />
);
const leftLeg = (
  <div
    key={5}
    style={{ position: "absolute", height: "10px", width: "80px", background: "black", top: "165px", right: "0px", rotate: "-60deg", transformOrigin: "right bottom" }}
  />
);

const bodyParts = [Head, Body, RightArm, LeftArm, rightLeg, leftLeg];

type HangmanDrawingProps = { numberOfIncorrectLetters: number };

const HangmanDrawing = ({ numberOfIncorrectLetters }: HangmanDrawingProps) => {
  return (
    <div className="position-relative mb-5">
      {bodyParts.slice(0, numberOfIncorrectLetters)}
      <div style={{ position: "absolute", height: "50px", width: "10px", background: "black", top: "0", right: "0" }} />
      <div style={{ position: "absolute", height: "10px", width: "130px", background: "black", right: "0" }} />
      <div style={{ height: "400px", width: "10px", background: "black", margin: "auto" }} />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
