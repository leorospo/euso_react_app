import React from 'react';
import Icon from '../elements/Icon';
import { Link } from 'react-router-dom';

import './Header.css';


export default class ListHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { } = this.props

        return (
            <div className="header content-sb">
                <Link to="/">
                    <Icon
                        encumbrance="large"
                        size="large"
                        color="tFF"
                        icon="arrow_back_ios"
                    />
                </Link>

            </div>
        )
    }
}

ListHeader.propTypes = {

}