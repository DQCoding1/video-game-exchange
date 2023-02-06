import React from "react";
import { Link } from "react-router-dom";

const GameCards = ({ currentGames }) => {
  return (
    <div>
      {currentGames.length > 0 ? (
        currentGames.map((item, index) => (
          <article key={index}>
            <h2>{item?.nameOfGame}</h2>
            <div>{item?.userName}</div>
            <div>{item?.consoleType}</div>
            <div>{item?.price}</div>
            {item.isNew ? <div>New</div> : <div>Used</div>}
            <Link to={""}>See more</Link>
          </article>
        ))
      ) : (
        <div>No Games Found</div>
      )}
    </div>
  );
};

export default GameCards;
