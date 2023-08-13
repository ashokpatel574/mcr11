import { movies } from "../contants";

export const initialState = {
  filters: JSON.parse(localStorage.getItem("moviesFilters")) || {
    searchKey: "",
    genreSelected: "all",
    yearSelected: "all",
    ratingSelected: "all",
  },
  movieListState: JSON.parse(localStorage.getItem("movieListData")) || movies,
  wishlistState: JSON.parse(localStorage.getItem("watchlistData")) || [],
  starredState: JSON.parse(localStorage.getItem("starredData")) || [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_INPUT_KEY": {
      return {
        ...state,
        filters: { ...state.filters, searchKey: action.payload },
      };
    }

    case "GENRE_FILTER_SET": {
      return {
        ...state,
        filters: { ...state.filters, genreSelected: action.payload },
      };
    }

    case "YEAR_FILTER_SET": {
      return {
        ...state,
        filters: { ...state.filters, yearSelected: action.payload },
      };
    }

    case "RATING_FILTER_SET": {
      return {
        ...state,
        filters: { ...state.filters, ratingSelected: action.payload },
      };
    }

    case "ADD_MOVIE_TO_WISHLIST": {
      return {
        ...state,
        wishlistState: [...state.wishlistState, { ...action.payload }],
      };
    }

    case "REMOVE_MOVIE_TO_WISHLIST": {
      return {
        ...state,
        wishlistState: state.wishlistState.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case "ADD_MOVIE_TO_STARRED": {
      return {
        ...state,
        starredState: [...state.starredState, { ...action.payload }],
      };
    }

    case "REMOVE_MOVIE_FROM_STARRED": {
      return {
        ...state,
        starredState: state.starredState.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    case "NEW_MOVIE_ADDED": {
      return {
        ...state,
        movieListState: [
          ...state.movieListState,
          { ...action.payload, id: Math.floor(Math.random() * 10000000) },
        ],
      };
    }

    default:
      return state;
  }
};
