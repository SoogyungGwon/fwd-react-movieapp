//Publish
const APP_FOLDER_NAME = "moviesite";
const OTHER_GLOBAL = "other-global";
export { APP_FOLDER_NAME, OTHER_GLOBAL }

//App info
export const appTitle = 'Moviesite';
export const appAuthor = 'Soogyung Gwon';
export const appStorageName = 'moo-list';
export const imageFolderPath = import.meta.env.BASE_URL + 'assets/';



//Genre
export const popularQuery = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const topRatedQuery = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const nowPlayingQuery = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const upcomingQuery = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';


//image
export const imageBaseURL = 'https://image.tmdb.org/t/p/w500/';

//Search
export const searchBaseURL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';

//Single movie ID query
export const singleMoveQuery = 'https://api.themoviedb.org/3/movie/';

//Finding Actor
//https://api.themoviedb.org/3/search/keyword?query=%27harry%27&page=1