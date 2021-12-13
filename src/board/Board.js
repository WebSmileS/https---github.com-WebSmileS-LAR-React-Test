import { useEffect, useState } from 'react';
import Lists from "../lists/Lists";

function Board({listNumber, cardNumber}) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      // if(window.pageYOffset < 1000)
      setOffset(window.pageYOffset)
    }
  }, []);
  console.log(offset, window.innerHeight)

  return (
      <div className="board" id="dashboard5477720007639040">
        <div className="board-view">
            <Lists listNumber={offset/310 + 4} cardNumber={cardNumber} />
            </div>
      </div>
  );
}

export default Board;
