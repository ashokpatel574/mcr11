import React from "react";
import MovieCard from "../components/MovieCard";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const StarredPage = () => {
  const {
    state: { starredState },
  } = useData();

  const navigate = useNavigate();

  return (
    <article className="Moviehome_container flex-column">
      <ul className="movieLists">
        {starredState?.length > 0 ? (
          starredState?.map((item) => <MovieCard key={item.id} item={item} />)
        ) : (
          <div className="no_item_found_container">
            <h3>No Movies are added!!</h3>
            <button className="btn" onClick={() => navigate("/")}>
              Home Page
            </button>
          </div>
        )}
      </ul>
    </article>
  );
};

export default StarredPage;
