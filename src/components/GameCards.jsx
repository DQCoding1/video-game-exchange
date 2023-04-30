import React from "react";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";
import "./MainPage.scss";
import "./GameCards.scss";

const GameCards = ({ currentGames, consoleType }) => {
  const setButtonColor = () => {
    switch (consoleType) {
      case "PlayStation And Xbox":
        return "article__linkPLayAndXbox";
      case "PlayStation":
        return "article__linkPLay";
      case "Xbox":
        return "article__linkXbox";
      default:
        return "consoleType doesn't exist";
    }
  };

  return (
    <>
      {currentGames?.length > 0 ? (
        currentGames.map((item) => (
          <article key={item.post_id} className="article">
            <img 
              src={"data:image/jpg;base64,"+item.image} 
              key={item.post_id} alt={`${item.nameOfGame}`}
              className="article__img"
              loading="lazy"
            />
            <div className="article__texts">
              <h2 className="article__h2">{item?.name_of_game}</h2>
              {item.is_new === "true" ? (
                <div className="article__newGame">New</div>
              ) : (
                <div className="article__usedGame">Used</div>
              )}
              <div className="article__consoleType">{item?.console_type}</div>
              <Link
                to={`${PublicRoutes.SPECIFICGAME}/${item.post_id}`}
                className={setButtonColor()}
              >
                See more
              </Link>
            </div>
          </article>
        ))
      ) : (
        <div className="section__noFound">No Games Found</div>
      )}
    </>
  );
};

export default GameCards;
