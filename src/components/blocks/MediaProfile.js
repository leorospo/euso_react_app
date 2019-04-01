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
                <button className={`btn tab-profile-${this.state.tab === "all" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>all</button>
                <button className={`btn tab-profile-${this.state.tab === "documents" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>documents</button>
                <button className={`btn tab-profile-${this.state.tab === "images" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>images</button>
                <button className={`btn tab-profile-${this.state.tab === "videos" ? "on" : "off"}`}
                    onClick={(e) => this.ChangeView(e)}>videos</button>
            </div>
        )
    }
}

MediaProfile.propTypes = {

}