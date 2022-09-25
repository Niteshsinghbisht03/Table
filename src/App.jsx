import React, { useState } from "react";
import Table from "./Table";

function App() {
  const [flip, setFlip] = useState(false);

  let key1 = "table1";
  let key2 = "table2";

  if (flip) {
    key1 = "table2";
    key2 = "table1";
  }

  function flipkey() {
    setFlip(!flip);
  }

  return (
    <>
      <div className="bg-slate-500">
        <div>
          <h1 className="py-4 text-5xl font-bold text-center">TABLE</h1>
        </div>
        <div className="flex py-10 justify-evenly bg-slate-200 grow">
          <Table key={key1}></Table>
          <Table key={key2}></Table>
        </div>
        <div className="flex justify-center">
          <button
            onClick={flipkey}
            className="px-2 py-2 my-2 text-2xl rounded-md bg-rose-500 "
          >
            {" "}
            Flip Table
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
