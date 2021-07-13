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
