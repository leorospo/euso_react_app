import React, { Component } from 'react';
import { search } from './Utils';
import SearchResults from './SearchResult';

export default class Search extends Component {
    state = {
        query: '',
        results: [],
    };

    onType(e) {
        this.setState({
            query: e.target.value,
        });

        let res = search(e.target.value);

        this.setState({
            results: res,
        });

    }

    render() {
        return (
            <div>
                <input
                    value={this.state.query}
                    onChange={e => this.onType(e)}
                    type="search" />
                    <SearchResults
                    results={this.state.results}
                    onClick={el => this.setState({
                        query: el,
                        results: [],
                    })} />
            </div>
        );
    }
}


