import { useState } from "react";

function App() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const pushItem = () => {
    if (inputValue !== null) {
      setStack([...stack, inputValue]);
    }
  };

  const popItem = () => {
    if (stack.length === 0) {
      alert("Cannot remove from an empty stack.");
    } else {
      stack.pop();
      setStack([...stack]);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col justify-center items-center mt-10 border border-black p-5 rounded-xl w-[400px]">
        <p>Stack: {stack.length > 0 ? [...stack].join(", ") : "Empty"}</p>
        <input className="p-2 rounded-md my-5 border border-black" type="text" placeholder="Enter a number" onChange={handleChange} />
        <div>
          <button className="bg-green-300 p-2 mx-1 rounded-md" onClick={pushItem}>Add to Stack</button>
          <button className="bg-red-300 p-2 mx-1 rounded-md" onClick={popItem}>Remove from Stack</button>
        </div>
      </div>
    </div>
  );
}

export default App;
