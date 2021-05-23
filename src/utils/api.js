import Actions from '../actions/Actions';
import { Config } from '../config/config';
import axios from 'axios';

class API {
    searchMovies(movie) {
        axios.post(`https://omdbapi.com/?apikey=${Config.api_key}&s=${movie.title}`)
            .then(res => {
                let movies = res.data.Search ? res.data.Search: [];
                Actions.showMovieResults(movies);
            })
            .catch(err => {
                console.log("err", err);
            })
    }
}

export default new API();