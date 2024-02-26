//App info
export const appTitle = 'Moviesite';
export const appAuthor = 'Soogyung Gwon';
export const appStorageName = 'moo-list';
export const imageFolderPath = import.meta.env.BASE_URL + 'src/assets/';

//api
export const apiKey = "&api_key=f8bcc12bd6f6afe7a33a79281ec21649";

//Genre
export const popularQuery = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc';


//image and search
export const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

export const searchBaseURL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';

//Single movie ID query
export const singleMoveQuery = 'https://api.themoviedb.org/3/movie/';




//Finding Actor
//https://api.themoviedb.org/3/search/keyword?query=%27harry%27&page=1&api_key=f8bcc12bd6f6afe7a33a79281ec21649

//Finding Movies
//https://api.themoviedb.org/3/search/collection?&include_adult=false&language=en-US&page=1&query=harry&api_key=f8bcc12bd6f6afe7a33a79281ec21649