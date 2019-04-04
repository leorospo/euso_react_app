import React from 'react';
import ListHeader from '../blocks/ListHeader';
import ChatList from '../blocks/ChatList';
import Button from '../elements/Button';
import Icon from '../elements/Icon';

export default class ChatListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { } = this.props;

        return (
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ListHeader
                        page={"chat"}
                    />
                    <div className="cnt-full g1">

                        <ChatList />
                    </div>

                    <Button
                        shape="round"
                        size="large"
                        optionalClass="btn-new-chat"
                        type="button"
                        onClick={() => alert("pippo")}
                    >
                        <Icon
                            encumbrance="medium"
                            size="large"
                            color="tFF"
                            icon="add"
                        />
                    </Button>

                </div>
                <div className="cnt-section-right"></div>
            </div>
        )
    }
}