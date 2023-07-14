export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "use your api from the rapidapi website",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const ytOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "use your api from the rapidapi website",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    https://github.com/satya-hash/fit-fusion.git
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
