import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";
import MovieCardButton from "../components/MovieCardButton";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const {
    state: { movieListState },
  } = useData();

  const movieListItem = movieListState.find(
    (item) => item.id === Number(movieId)
  );

  if (movieListItem) {
    const {
      title,
      year,
      genre,
      rating,
      director,
      writer,
      cast,
      summary,
      imageURL,
    } = movieListItem;
    return (
      <section className="Moviehome_container MovieDetails_container flex-column">
        <div className="movieItem_container">
          <div className="movieItem_Imgcontainer">
            <img src={imageURL} alt={title} className="imgCover" />
          </div>
          <div className="movieItem_Info_container">
            <h3>{title}</h3>
            <p>{summary}</p>
            <p>Year: {year}</p>
            <p>Genre: {genre.join(", ")}</p>
            <p>Rating: {rating}</p>

            <p>Director: {director}</p>
            <p>Writer: {writer}</p>
            <p>Cast: {cast.join(", ")}</p>
            <MovieCardButton item={movieListItem} />
          </div>
        </div>
      </section>
    );
  } else {
    return <h3>No inventory Item found!</h3>;
  }
};

export default MovieDetailsPage;
