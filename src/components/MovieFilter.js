import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const MovieFilter = () => {
  const [movieFilters, setMovieFilters] = useState({
    genreSelected: "",
    yearSelected: "",
    ratingSelected: "",
  });

  const navigate = useNavigate();

  const {
    state: { filters, movieListState },
    dispatch,
  } = useData();

  const genreSelectHanler = (e) => {
    setMovieFilters({ ...movieFilters, genreSelected: e.target.value });
    dispatch({ type: "GENRE_FILTER_SET", payload: e.target.value });
  };

  const yearSelectedhandler = (e) => {
    setMovieFilters({ ...movieFilters, yearSelected: e.target.value });
    dispatch({ type: "YEAR_FILTER_SET", payload: e.target.value });
  };

  const ratingSelectedHandler = (e) => {
    setMovieFilters({ ...movieFilters, ratingSelected: e.target.value });
    dispatch({ type: "RATING_FILTER_SET", payload: e.target.value });
  };

  const genreList = [];
  const ratingList = [];
  const yearList = [];

  movieListState.forEach((item) => {
    item.genre.forEach((element) => {
      if (!genreList.includes(element)) {
        genreList.push(element);
      }
    });

    if (!ratingList.includes(item.rating)) {
      ratingList.push(item.rating);
    }

    if (!yearList.includes(item.year)) {
      yearList.push(item.year);
    }
  });

  return (
    <div className="MoviesFilter_section">
      <h3>Movies</h3>
      <div className="genre_select_container">
        <label htmlFor="genre"></label>
        <select
          className="genre_select"
          id="genre"
          name="genre"
          value={filters.genreSelected}
          onChange={genreSelectHanler}
        >
          <option key={"disabledGenre"} value="" disabled>
            Movie Genre
          </option>
          <option key={"allgenre"} value="all">
            All Genre
          </option>

          {genreList.map((item) => (
            <React.Fragment key={item}>
              <option value={item}>{item}</option>
            </React.Fragment>
          ))}
        </select>
      </div>

      <div className="year_select_container">
        <label htmlFor="year"></label>
        <select
          className="genre_select"
          id="year"
          name="year"
          value={filters.yearSelected}
          onChange={yearSelectedhandler}
        >
          <option key={"disabledyear"} value="" disabled>
            Released year
          </option>
          <option key={"allyear"} value="all">
            All Year
          </option>

          {yearList.map((item) => (
            <React.Fragment key={item}>
              <option value={item}>{item}</option>
            </React.Fragment>
          ))}
        </select>
      </div>

      <div className="rating_select_container">
        <label htmlFor="rating"></label>
        <select
          className="rating_select"
          id="rating"
          name="rating"
          value={filters.ratingSelected}
          onChange={ratingSelectedHandler}
        >
          <option key={"disabledrating"} value="" disabled>
            Movie Rating
          </option>
          <option key={"allrating"} value="all">
            All Rating
          </option>

          {ratingList.map((item) => (
            <React.Fragment key={item}>
              <option value={item}>{item}</option>
            </React.Fragment>
          ))}
        </select>
      </div>

      <div className="addMovie_btnContainer">
        <button
          onClick={() => navigate("/addmovie")}
          className="btn addMovieBtn"
        >
          New Movie
        </button>
      </div>
    </div>
  );
};

export default MovieFilter;
