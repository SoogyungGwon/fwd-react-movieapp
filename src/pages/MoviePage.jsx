//Single movie page

//import
import react from 'react';
import { useParams } from 'react-router-dom';

//Variables
import { appTitle, appAuthor, apiKey } from '../globals/globalVariables';


//Connect to Movie API
//example of JSON 'https://api.themoviedb.org/3/movie/11?api_key=f8bcc12bd6f6afe7a33a79281ec21649'

// //Auth check from Movie DB API documentation
// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGJjYzEyYmQ2ZjZhZmU3YTMzYTc5MjgxZWMyMTY0OSIsInN1YiI6IjY1YjdmZjFmYjE4ZjMyMDE3YzI4NDM4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QteDge71_dNnuxilMmI4wuYgNwz8y35vFrIux_SMVB0'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
// //Auth check example END

const MoviePage = () => {
    return (
        <div>Movie page</div>
    );
}

export default MoviePage;