import React, { createContext, useContext, useReducer } from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  localStorage.setItem("movieListData", JSON.stringify(state.movieListData));
  localStorage.setItem("watchlistData", JSON.stringify(state.movieListData));
  localStorage.setItem("starredData", JSON.stringify(state.movieListData));
  localStorage.setItem("moviesFilters", JSON.stringify(state.filters));

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
export const useData = () => useContext(DataContext);
