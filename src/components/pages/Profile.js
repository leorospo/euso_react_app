import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import ProfileMediaGrid from './../blocks/ProfileMediaGrid';
import Header from './../blocks/Header';
import { Link } from 'react-router-dom';


import propTypes from 'prop-types';
import './Profile.css';

const label = ["documents", "images", "videos"]

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "documents",
        }
    }

    ChangeView(value) {
        this.setState({
            tab: value
        })
    }

    render() {
        const { user } = this.props

        return (
            <div className="cnt-global">
                <div className="cnt-section-left">

                    <Header />

                    <div className="cnt-full-profile g1">
                        <ProfileImg
                            user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                            size='xl'
                        />

                        <div className="profile-element-title sns-sp-620 tg6">{user.userName}</div>
                        <div className="cnt-element-subtitle-role">
                            <div className="profile-element-subtitle-role sns-sp-416 tg3">{user.userRole}</div>

                            <Icon
                                encumbrance="small"
                                size="small"
                                color="tg3"
                                icon="create"
                                onClick={() => alert("pippo")}
                            />

                        </div>

                        <Button
                            shape="square"
                            size="medium"
                            optionalClass="profile-button"
                            type="button"
                        >
                            CHAT
                        </Button>


                        <div className="sep-profile"></div>

                        <div className="profile-media-cnt">
                            <div className="profile-media-menu">
                                {label.map((el, index) => <button className={`btn tab-profile-${this.state.tab === el ? "on" : "off"}`}
                                    key={index}
                                    onClick={() => this.ChangeView(el)}>{el}</button>)
                                }
                            </div>
                            <ProfileMediaGrid
                                view={this.state.tab}
                            />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    user: propTypes.shape({
        userName: propTypes.string.isRequired,
        userRole: propTypes.string.isRequired,
    }).isRequired,
}