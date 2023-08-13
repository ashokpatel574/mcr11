import React from "react";
import { useData } from "../context/DataContext";

const MovieCardButton = ({ item }) => {
  const {
    state: { wishlistState, starredState },
    dispatch,
  } = useData();

  const isItemIncluded = (state, id) => {
    return state.some((item) => item.id === id);
  };

  const isInWishList = isItemIncluded(wishlistState, item.id);
  const isInStarred = isItemIncluded(starredState, item.id);

  const addWishListHandler = (e, item) => {
    e.stopPropagation();
    dispatch({ type: "ADD_MOVIE_TO_WISHLIST", payload: item });
  };

  const removeWishListHandler = (e, id) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_MOVIE_TO_WISHLIST", payload: id });
  };

  const addStarHandler = (e, item) => {
    e.stopPropagation();
    dispatch({ type: "ADD_MOVIE_TO_STARRED", payload: item });
  };

  const removeStarHandler = (e, id) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_MOVIE_FROM_STARRED", payload: id });
  };

  return (
    <div className="movie_card_btnContainer">
      {isInWishList ? (
        <button
          className="btn removeWishListBtn"
          onClick={(e) => removeWishListHandler(e, item.id)}
        >
          Remove from WishList
        </button>
      ) : (
        <button
          className="btn addWishListBtn"
          onClick={(e) => addWishListHandler(e, item)}
        >
          Add to WishList
        </button>
      )}
      {isInStarred ? (
        <button
          className="btn removeStarBtn"
          onClick={(e) => removeStarHandler(e, item.id)}
        >
          Starred
        </button>
      ) : (
        <button
          className="btn addStarBtn"
          onClick={(e) => addStarHandler(e, item)}
        >
          Add Star
        </button>
      )}
    </div>
  );
};

export default MovieCardButton;
