import React, {Component} from 'react';
import Actions from '../actions/Actions';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let movie = {
            title: this.refs.title.value
        }
        Actions.searchMovies(movie);
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                        <input type="text" className="col-md-11 form-control" ref="title" placeholder="search for a movie..." />
                        <button className="col-md-1 btn btn-primary">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchForm;