import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import propTypes from 'prop-types';
import './Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { user } = this.props

        return (
            <div className="cnt-global">
                <div class="cnt-section-left">

                    <div class="header content-sb">
                        <a href="###">
                            <div class="icn-cnt-44 tFF">
                                <i class="material-icons arrow">arrow_back_ios</i>
                            </div>
                        </a>
                    </div>

                    <div class="cnt-full-profile g1">
                        <ProfileImg
                            user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                            size='xl'
                        />

                        <div className="chat-list-element-title sns-sp-620 tg6">{user.userName}</div>
                        <div className="cnt-element-subtitle-role">
                        <div className="profile-element-subtitle-role sns-sp-416 tg3">{user.userRole}</div>
                            <i className="material-icons arrow icn-cnt-16 tg3">create</i>
                        </div>

                        <button className="btn-primary profile-select-button" onClick={alert("pippo")}>CHAT</button>

                        <div className="sep-profile"></div>

                        <div className="menu-profile">
                            <button className="btn-profile sns-sp-418">MEDIA</button>
                            <button className="btn-profile sns-sp-418">DOCUMENT</button>
                            <button className="btn-profile sns-sp-418">IMAGES</button>
                            <button className="btn-profile sns-sp-418">VIDEOS</button>
                        </div>

                        <div className="media-profile">
                            <img className="media-profile-element" src="##" />
                            <img className="media-profile-element" src="##" />
                            <img className="media-profile-element" src="##" />
                            <img className="media-profile-element" src="##" />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

Profile.propTypes = {

}