import React from 'react';
import Icons from './../elements/Icons';

import propTypes from 'prop-types';


export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { user } = this.props

        return (

            <div class="header content-sb">

                <Icons
                    encumbrance="large"
                    size="large"
                    color="tFF"
                    icon="arrow_back_ios"
                />

            </div>
        )
    }
}

Profile.propTypes = {

}