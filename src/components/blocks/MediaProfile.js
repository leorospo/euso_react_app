import React from 'react';
import Grids from './ProfileMediaGrid';

import propTypes from 'prop-types';


const label = ["documents", "images", "videos"]

export default class MediaProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "image",
        }
    }

    ChangeView(value) {
        this.setState({
            tab: value
        })
    }

    render() {
        const { } = this.props

        return (
            <div className="profile-media-cnt">
                <div className="menu-profile">
                    {label.map((el, index) => <button className={`btn tab-profile-${this.state.tab === el ? "on" : "off"}`}
                        key={index}
                        onClick={() => this.ChangeView(el)}>{el}</button>)
                    }
                </div>
                <Grids
                    view={this.state.tab}
                />
            </div>
        )
    }
}

MediaProfile.propTypes = {

}