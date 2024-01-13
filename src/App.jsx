/*
  Game
    -> Board
        -> Square
    -> History
*/

function Square({ value }) {
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 leading-9 text-lg">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-3 w-fit">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  );
}
