import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

import MovieDetailsPage from "./pages/MovieDetailsPage";

import AddMoviePage from "./pages/AddMoviePage";
import WishListPage from "./pages/WishListPage";
import StarredPage from "./pages/StarredPage";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="app">
      <Header />
      <section className="main_container">
        <Routes>
          <Route path="/" element=<HomePage /> />
          <Route path="/watchlist" element=<WishListPage /> />
          <Route path="/starred" element=<StarredPage /> />
          <Route path="/movie/:movieId" element=<MovieDetailsPage /> />
          <Route path="/addmovie" element=<AddMoviePage /> />
          <Route path="*" element=<PageNotFound /> />
        </Routes>
      </section>
    </main>
  );
};

export default App;
