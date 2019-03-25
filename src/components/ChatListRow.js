import React from 'react';
import ProfileImg from './ProfileImg';

export default class ChatListRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favorited: false,
            silenced: false,
            unreadMessages: false
        }
    }

    onclick() {

    }

    render() {
        return (
            <div className="ChatListRow chat-list-element c-y1"
                onClick={() => onclick()}>

                <ProfileImg
                    user={{ name: 'Carol Evans', profileImgName: '1_carol.jpg' }}
                    size='medium'
                    onClick={() => alert('pippo')}
                />

            </div>
        );
    }
}
