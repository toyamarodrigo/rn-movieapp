import { API_HOST, API_KEY, LANG } from "../utils/constants";

export function getNewsMoviesApi(page = 1) {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
}

export function getGenreMovieApi(genreID) {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      const arrayGenres = [];

      genreID.forEach((id) => {
        result.genres.forEach((item) => {
          if (item.id === id) arrayGenres.push(item.name);
        });
      });

      return arrayGenres;
    });
}

export function getAllGenresApi() {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
}

export function getGenreMoviesApi(genreID) {
  const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${genreID}&language=${LANG}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
}

export function getMovieByIdApi(movieID) {
  const url = `${API_HOST}/movie/${movieID}?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
}

export function getVideoMovieApi(movieID) {
  const url = `${API_HOST}/movie/${movieID}/videos?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    });
}
