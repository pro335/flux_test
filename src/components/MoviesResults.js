import React, {Component} from 'react';
import Movie from './Movie';

class MovieResults extends Component {
    render() {
        return (
            <div>
                <h4>Results: {this.props.movies.length}</h4>
                <ul className="list-group">
                    {
                        this.props.movies.map(function(movie, i) {
                            return <Movie movie={movie} key={i} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MovieResults;