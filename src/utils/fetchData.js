export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f4ed946d77mshd5f0c4382bf79a6p12940djsn3b386aa0f7de",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const ytOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f4ed946d77mshd5f0c4382bf79a6p12940djsn3b386aa0f7de",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
