import { useNavigate } from "react-router";
import MovieCardButton from "./MovieCardButton";

const MovieCard = ({ item }) => {
  const { title, summary, imageURL } = item;
  const navigate = useNavigate();

  return (
    <div
      className="movie_card_container"
      onClick={() => navigate(`/movie/${item.id}`)}
    >
      <div className="movie_card_imgContainer">
        <img src={imageURL} alt={title} className="imgCover" />
      </div>
      <div className="movie_card_body flex-column">
        <h3>{title}</h3>
        <p>{summary}</p>

        <MovieCardButton item={item} />
      </div>
    </div>
  );
};

export default MovieCard;
