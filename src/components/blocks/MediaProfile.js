import React from 'react';

import propTypes from 'prop-types';

export default class MediaProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "all",
        }
    }

    ChangeView(e) {
        this.setState({
            tab: `${e.currentTarget.innerHTML}`
        })
    }

    render() {
        const { } = this.props

        return (
            <div className="menu-profile">
                <p className={`tab-profile-${this.state.tab === "all" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>all</p>
                <p className={`tab-profile-${this.state.tab === "documents" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>documents</p>
                <p className={`tab-profile-${this.state.tab === "images" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>images</p>
                <p className={`tab-profile-${this.state.tab === "videos" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>videos</p>
            </div>
        )
    }
}

MediaProfile.propTypes = {

}