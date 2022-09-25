import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, updateNum] = useState(2);

  const [uptonum, updateuptoNum] = useState(10);

  let row = [];

  for (let i = 1; i <= uptonum; i++) {
    row.push(<TableRow number={num} index={i} />);
  }

  function handlechange(event) {
    const newNum = +event.target.value;
    updateNum(newNum);
  }

  function uptonumchange(event) {
    const newuptoNum = +event.target.value;
    updateuptoNum(newuptoNum);
  }

  return (
    <div className="flex flex-col items-center py-2 text-center bg-gray-200">
      {num > 15 ? (
        <div className="py-2 text-xl">
          Yes ,you can do it! you are at {num}. Come on do it
        </div>
      ) : (
        <div className="pt-2 text-xl">Oh Come ! you are at {num}.Hurry up!</div>
      )}

      <div className="flex flex-col ">
        <input
          onChange={handlechange}
          placeholder="Enter The Number"
          className="my-2 border border-gray-700 rounded-md"
          value={num}
        />
        <input
          onChange={uptonumchange}
          placeholder="Enter The Upto Number"
          className="my-2 border border-gray-700 rounded-md"
          value={uptonum}
        />
      </div>

      <div className="px-10 py-6 my-6 bg-white"> {row} </div>
    </div>
  );
}

export default Table;
