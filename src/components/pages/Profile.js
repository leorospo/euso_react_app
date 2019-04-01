import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import Buttons from './../elements/Buttons';
import Icons from './../elements/Icons';
import MediaProfile from './../blocks/MediaProfile';

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

                        <div className="profile-element-title sns-sp-620 tg6">{user.userName}</div>
                        <div className="cnt-element-subtitle-role">
                            <div className="profile-element-subtitle-role sns-sp-416 tg3">{user.userRole}</div>
                            
                            <Icons
                                encumbrance="small"
                                size="small"
                                color="tg3"
                                icon="create"
                            />

                        </div>

                        <Buttons
                            shape="square"
                            size="medium"
                            optionalClass="profile-button"
                            type="button"
                        >
                            CHAT
                            </Buttons>

                        <div className="sep-profile"></div>

                        <MediaProfile />

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