import React from 'react';
import Icon from '../elements/Icon';
import { Link } from 'react-router-dom';
import './Header.css';

import propTypes from 'prop-types';


export default class ListHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavoriteFilterActive: false,
            searchingActive: false,
        }
    }

    setFavoriteFilter() {
        this.setState({
            isFavoriteFilterActive: !this.state.isFavoriteFilterActive
        })
    }

    setSearch() {
        this.setState({
            searchingActive: !this.state.searchingActive
        })
    }

    render() {
        const { page } = this.props

        return (
            <div className="header content-sb">
                {this.state.searchingActive ?
                    <Icon
                        encumbrance="large"
                        size="large"
                        color="tFF"
                        icon="close"
                        onClick={() => this.setSearch()}
                    /> :
                    <Link to={page === "contact" ? "/" : "/settings"}>
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon={page === "contact" ? "arrow_back_ios" : "settings"}
                        />
                    </Link>
                }

                {!this.state.searchingActive ?
                    <Icon
                        encumbrance="large"
                        size="large"
                        color="tFF"
                        icon="search"
                        onClick={() => this.setSearch()}
                    /> :
                    <input className="input-search sns-sp-320 bFF" />
                }

                <Icon
                    encumbrance="large"
                    size="large"
                    color="tFF"
                    icon={!this.state.isFavoriteFilterActive ? "star_border" : "star"}
                    onClick={() => this.setFavoriteFilter()}
                />

            </div>
        )
    }
}

ListHeader.propTypes = {
    page: propTypes.oneOf(['contact', 'chat']),

}