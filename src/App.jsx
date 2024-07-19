import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [sequence, setSequence] = useState([]);
  const handleClick = (num) => {
    if (!sequence.includes(num)) {
      setSequence([...sequence, num]);
      document.getElementById(`button-${num}`).style.backgroundColor = "green";
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const colorOrange = async () => {
    for (let item of sequence) {
      await sleep(500); // wait for 0.5 second
      document.getElementById(`button-${item}`).style.backgroundColor =
        "orange";
    }
  };

  const handleReset = () => {
    setSequence([]);
    console.log("hii");
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`button-${i}`).style.backgroundColor = "inherit";
    }
  };

  const startSequence = () => {
    colorOrange();
  };

  useEffect(() => {
    console.log(sequence.length);
    if (sequence.length == 9) {
      console.log("complete");
      colorOrange();
    }
  }, [sequence]);

  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold underline pb-8 pt-24">
          Sequence Tracer
        </h1>
        <div className="grid grid-cols-3 gap-2 border-2 border-gray-100 p-2 max-w-96">
          {arr.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              id={`button-${item}`}
              className="w-20 border-2 border-gray-400 h-20 cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] hover:scale-[1.05] "
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 my-8 gap-4 max-w-96">
          <button className="bg-red-500" onClick={handleReset}>
            Reset
          </button>
          <button className="bg-blue-500" onClick={startSequence}>
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
