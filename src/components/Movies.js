import React, {Component} from 'react';
import MoviesStore from '../stores/MovesStore';
import SearchForm from './SearchForm';
import MoviesResults from './MoviesResults';

class Movies extends Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.getAppState = this.getAppState.bind(this);
        this.state = this.getAppState();
    }

    getAppState() {
        return {
            movies: MoviesStore.getMovieResults()
        }
    }

    componentDidMount() {
        MoviesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MoviesStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(this.getAppState);
    }

    render() {
        var moviesResults = '';
        if(this.state.movies === '') {
            moviesResults = '';
        } else {
            moviesResults = <MoviesResults movies={this.state.movies} />;
        }

        return (
            <div className="album py-5 bg-light">
                <h3 className="text-center">Movies</h3>
                <div className="container">
                    <SearchForm />
                </div>
                <div className="container pull-down">
                    {moviesResults}
                </div>
            </div>
        )
    }
}

export default Movies;