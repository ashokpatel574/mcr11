import React from "react";
import { useData } from "../context/DataContext";
import MovieFilter from "../components/MovieFilter";
import MovieCard from "../components/MovieCard";
import { useFilterData } from "../helper";

const HomePage = () => {
  const {
    state: { movieListState, filters },
  } = useData();

  const { filteredData } = useFilterData(movieListState, filters);

  return (
    <article className="Moviehome_container flex-column">
      <MovieFilter />

      <ul className="movieLists">
        {filteredData?.length > 0 ? (
          filteredData?.map((item) => <MovieCard key={item.id} item={item} />)
        ) : (
          <h3>No Movie found for applied filters!!</h3>
        )}
      </ul>
    </article>
  );
};

export default HomePage;
