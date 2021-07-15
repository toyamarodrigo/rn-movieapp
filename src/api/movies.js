import { API_HOST, API_KEY, LANG } from "../utils/constants";

export async function getNewsMoviesApi(page = 1) {
  try {
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);

    return null;
  }
}

export async function getGenreMovieApi(genreID) {
  try {
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
    const response = await fetch(url);
    const result = await response.json();

    const arrayGenres = [];

    genreID.forEach((id) => {
      result.genres.forEach((item) => {
        if (item.id === id) arrayGenres.push(item.name);
      });
    });

    return arrayGenres;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getAllGenresApi() {
  try {
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
}

export async function getGenreMoviesApi(genreID) {
  try {
    const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&with_genres=${genreID}&language=${LANG}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getMovieByIdApi(movieID) {
  try {
    const url = `${API_HOST}/movie/${movieID}?api_key=${API_KEY}&language=${LANG}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getVideoMovieApi(movieID) {
  try {
    const url = `${API_HOST}/movie/${movieID}/videos?api_key=${API_KEY}&language=${LANG}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getPopularMoviesApi(page = 1) {
  try {
    const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function searchMoviesApi(search) {
  try {
    const url = `${API_HOST}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${search}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
}
