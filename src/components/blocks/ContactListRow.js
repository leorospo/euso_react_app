import React from 'react';
import ProfileImg from '../elements/ProfileImg';
import ReactSwipe from 'react-swipe';
import ContactListRowMain from './ContactListRowMain';
import ContactListRowSwipe from './ContactListRowSwipe';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';
import "./ListRow.css";


export default class ContactListRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: this.props.chat.favorited,
            silenced: this.props.chat.silenced,
        }
    }

    render() {
        const { chat, onClick, group } = this.props
        let reactSwipeEl;

        return (
            <div className={"ContactListRow contact-list-element " + (this.state.favorited ? `c-y1` : `c-w`)}
                onClick={onClick}>

                <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                />

                {!group ?
                    <ReactSwipe
                        className="swipe"
                        swipeOptions={{ continuous: false }}
                        ref={el => (reactSwipeEl = el)}
                    >
                        <div>
                            <ContactListRowMain group={this.props.group} chat={chat} silenced={this.state.silenced} />
                        </div>
                        <div onClick={e => { e.stopPropagation(); e.preventDefault() }}>
                            <ContactListRowSwipe />
                        </div>

                    </ReactSwipe> :

                    <ContactListRowMain group={this.props.group} chat={chat} silenced={this.state.silenced} />

                }

                <div className="contact-list-sep"></div>

            </div>

        );
    }
}

ContactListRow.propTypes = {
    chat: propTypes.shape({
        userFullName: propTypes.string.isRequired,
        userProfileImg: propTypes.string.isRequired,
        userRole: propTypes.string.isRequired,

        unreadCount: propTypes.string.isRequired,
        silenced: propTypes.bool.isRequired,
        favorited: propTypes.bool.isRequired,
    }).isRequired,
    onClick: propTypes.func,

}
