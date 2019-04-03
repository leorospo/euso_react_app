import React from 'react';
import Icon from '../elements/Icon';
import './Header.css';

import propTypes from 'prop-types';


export default class ListHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {  } = this.props

        return (
            <div class="header content-sb">

                    <Icon
                        encumbrance="large"
                        size="large"
                        color="tFF"
                        icon= "arrow_back_ios"
                        onClick={() => alert("pippo")}
                    />
              
            </div>
        )
    }
}

ListHeader.propTypes = {

}