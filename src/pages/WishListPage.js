import React from "react";
import { useData } from "../context/DataContext";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";

const WishListPage = () => {
  const {
    state: { wishlistState },
  } = useData();

  const navigate = useNavigate();

  return (
    <article className="Moviehome_container flex-column">
      <ul className="movieLists">
        {wishlistState.length > 0 ? (
          wishlistState?.map((item) => <MovieCard key={item.id} item={item} />)
        ) : (
          <div className="no_item_found_container">
            <h3>No Movies are added in wishlist!!</h3>
            <button className="btn" onClick={() => navigate("/")}>
              Home Page
            </button>
          </div>
        )}
      </ul>
    </article>
  );
};

export default WishListPage;
