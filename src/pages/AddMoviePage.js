import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const AddMoviePage = () => {
  const [newMovieData, setNewMovieData] = useState({
    title: "",
    year: "",
    genre: [],
    rating: "",
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const { dispatch } = useData();
  const navigate = useNavigate();

  const movieAddHandler = (e) => {
    const { name, value } = e.target;
    setNewMovieData({ ...newMovieData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: newMovieData.title,
      year: Number(newMovieData.year),
      genre: newMovieData.genre.split(","),
      rating: Number(newMovieData.rating),
      director: newMovieData.director,
      writer: newMovieData.writer,
      cast: newMovieData.cast.split(","),
      summary: newMovieData.summary,
      imageURL: newMovieData.imageURL,
    };

    dispatch({
      type: "NEW_MOVIE_ADDED",
      payload: data,
    });

    setNewMovieData({
      title: "",
      year: "",
      genre: [],
      rating: "",
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageURL: "",
    });

    navigate("/");
  };

  return (
    <article className="addMovie_container  flex-column">
      <h3>Add New Movie</h3>
      <form
        className="addMovie_container_form_wrapper flex-column"
        value={newMovieData}
        onSubmit={formSubmitHandler}
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            className="title"
            type="text"
            placeholder="Enter title here"
            name="title"
            value={newMovieData.title}
            onChange={movieAddHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            className="summary"
            value={newMovieData.summary}
            onChange={movieAddHandler}
            maxLength={500}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="year">Released year:</label>
          <input
            id="year"
            className="year"
            type="number"
            placeholder="Enter year here"
            name="year"
            value={newMovieData.year}
            onChange={movieAddHandler}
            min={1950}
            max={2023}
            required
          />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            id="rating"
            className="rating"
            type="number"
            placeholder="Enter rating here"
            name="rating"
            value={newMovieData.rating}
            onChange={movieAddHandler}
            min={1}
            max={10}
            required
          />
        </div>

        <div>
          <label htmlFor="genre">Genres:</label>
          <input
            id="genre"
            className="genre"
            type="text"
            placeholder="Enter genre here"
            name="genre"
            value={newMovieData.genre}
            onChange={movieAddHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="director">Director:</label>
          <input
            id="director"
            className="director"
            type="text"
            placeholder="Enter director here"
            name="director"
            value={newMovieData.director}
            onChange={movieAddHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="cast">Cast:</label>
          <input
            id="cast"
            className="cast"
            type="text"
            placeholder="Enter cast here"
            name="cast"
            value={newMovieData.cast}
            onChange={movieAddHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="writer">Writer:</label>
          <input
            id="writer"
            className="writer"
            type="text"
            placeholder="Enter writer here"
            name="writer"
            value={newMovieData.writer}
            onChange={movieAddHandler}
            required
          />
        </div>

        <div>
          <label htmlFor="imageURL">Image Url:</label>
          <input
            id="imageURL"
            className="imageURL"
            type="text"
            placeholder="Enter image Url here"
            name="imageURL"
            value={newMovieData.imageURL}
            onChange={movieAddHandler}
            required
          />
        </div>

        <button type="submit" className="btn submitBtn">
          Add Movie
        </button>
      </form>
    </article>
  );
};

export default AddMoviePage;
