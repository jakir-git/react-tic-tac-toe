import { useState } from "react";
/*
  Game
    -> Board
        -> Square
    -> History
*/

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(8).fill(null));

  function handleClick() {
    squares[0] = "X";
    setSquares([...squares]);
  }

  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-3 w-fit">
      <Square value={squares[0]} onSquareClick={handleClick} />
      <Square value={squares[1]} onSquareClick={handleClick} />
      <Square value={squares[2]} onSquareClick={handleClick} />
      <Square value={squares[3]} onSquareClick={handleClick} />
      <Square value={squares[4]} onSquareClick={handleClick} />
      <Square value={squares[5]} onSquareClick={handleClick} />
      <Square value={squares[6]} onSquareClick={handleClick} />
      <Square value={squares[7]} onSquareClick={handleClick} />
      <Square value={squares[8]} onSquareClick={handleClick} />
    </div>
  );
}
