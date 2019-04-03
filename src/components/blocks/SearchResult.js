import React from 'react';
import PropTypes from 'prop-types';
import ChatListRow from './ContactListRow';

const SearchResults = props => (

    <ul>
        {props.results.map(
            r => <ChatListRow key={r.id} chat={r} />
        )}
    </ul>
);

SearchResults.propsType = {
    results: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired,
};

export default SearchResults;