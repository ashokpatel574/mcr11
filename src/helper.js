const genreFilter = (data, filterType) => {
  if (filterType === "all") {
    return data;
  }

  return data.filter((listItem) => {
    return listItem.genre.some((elem) => elem === filterType);
  });
};

const movieYearFilter = (data, filterType) => {
  if (filterType === "all") {
    return data;
  }

  return data.filter((listItem) => {
    return listItem.year === Number(filterType);
  });
};

const movieRatingFilter = (data, filterType) => {
  if (filterType === "all") {
    return data;
  }

  return data.filter((listItem) => {
    return listItem.rating === Number(filterType);
  });
};

const searchFilter = (data, filterType) => {
  const searchText = filterType.trim().toLowerCase();

  if (searchText === "") {
    return data;
  }

  return data.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchText) ||
      item.director.toLowerCase().includes(searchText) ||
      item.cast.some((elem) => elem.toLowerCase().includes(searchText))
    );
  });
};

const applyFilters = (movieList, filters) => {
  let filteredData = [...movieList];
  const { searchKey, genreSelected, yearSelected, ratingSelected } = filters;

  filteredData = searchFilter(filteredData, searchKey);
  filteredData = genreFilter(filteredData, genreSelected);
  filteredData = movieYearFilter(filteredData, yearSelected);
  filteredData = movieRatingFilter(filteredData, ratingSelected);

  return filteredData;
};

export const useFilterData = (movieList, filters) => {
  const newStateData = applyFilters(movieList, filters);
  return { filteredData: newStateData };
};
