import React from 'react';
import Icon from '../elements/Icon';
import ProfileImg from '../elements/ProfileImg';
import { Link } from 'react-router-dom';

import './Header.css';

//import propTypes from 'prop-types';


export default class ChatHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchingActive: false,
            selectedMessages: 0,
        }
    }

    setSearch() {
        this.setState({
            searchingActive: !this.state.searchingActive
        })
    }

    render() {
        const { } = this.props

        return (
            <div className="header content-sb">

                <div className="header-cnt">
                    {this.state.searchingActive ?
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="close"
                            onClick={() => this.setSearch()}
                        /> :
                        <Link to="/">
                            <Icon
                                encumbrance="large"
                                size="large"
                                color="tFF"
                                icon="arrow_back_ios"
                            />
                        </Link>
                    }

                    {this.state.selectedMessages > 0 ?
                        <div className="sns-sp-616 tFF">{this.state.selectedMessages}</div> :

                        !this.state.searchingActive && this.state.selectedMessages === 0 &&
                        <div className="header-cnt">
                            <ProfileImg
                                user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                                size='small'
                            />
                            <div className="profile-label sns-sp-616" >Carol Evans</div>
                        </div>
                    }
                </div>


                {!this.state.searchingActive || <input className="input-search sns-sp-320 b1" />}

                {this.state.selectedMessages > 0 ?
                    < div className="header-cnt">
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="reply"
                            onClick={() => alert("pippo")}
                        />
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="file_copy"
                            onClick={() => alert("pippo")}
                        />
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="delete"
                            onClick={() => alert("pippo")}
                        />
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="forward"
                            onClick={() => alert("pippo")}
                        />
                    </div> :

                    !this.state.searchingActive ?
                        <Icon
                            encumbrance="large"
                            size="large"
                            color="tFF"
                            icon="search"
                            onClick={() => this.setSearch()}
                        /> : <div className="header-cnt">
                            <Icon
                                encumbrance="large"
                                size="large"
                                color="tFF"
                                icon="keyboard_arrow_down"
                                onClick={() => alert("pippo")}
                            />
                            <Icon
                                encumbrance="large"
                                size="large"
                                color="tFF"
                                icon="keyboard_arrow_up"
                                onClick={() => alert("pippo")}
                            />
                        </div>

                }

            </div >
        )
    }
}

ChatHeader.propTypes = {

}