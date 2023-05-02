import React from "react";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";
import { consoleTypes } from "../consts/consoleTypes";
import "./MainPage.scss";
import "./GameCards.scss";

const GameCards = ({ currentPosts, consoleType }) => {
  const setButtonColor = () => {
    switch (consoleType) {
      case consoleTypes.playAndXbox:
        return "article__linkPLayAndXbox";
      case consoleTypes.playStation:
        return "article__linkPLay";
      case consoleTypes.xbox:
        return "article__linkXbox";
      default:
        return "consoleType doesn't exist";
    }
  };

  return (
    <>
      {currentPosts?.length > 0 ? (
        currentPosts.map((item) => (
          <article key={item.post_id} className="article">
            <img 
              src={"data:image/jpg;base64,"+item.image} 
              alt={item.name_of_game}
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
