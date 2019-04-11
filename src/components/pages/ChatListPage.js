import React from 'react';
import ListHeader from '../blocks/ListHeader';
import ChatList from '../blocks/ChatList';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import { Link } from 'react-router-dom';


export default class ChatListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillUpdate = () => {
        this.props.setUsers()
    }

    render() {
        const { workspace, userId } = this.props;

        return (
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ListHeader
                        page={"chat"}
                    />

                    <ChatList userId={userId} users={this.props.users}
                    />

                    <Link to="/contacts">
                        <Button
                            shape="round"
                            size="large"
                            optionalClass="btn-new-chat"
                            type="button"
                        >
                            <Icon
                                encumbrance="medium"
                                size="large"
                                color="tFF"
                                icon="add"
                            />
                        </Button>
                    </Link>
                </div>
                <div className="cnt-section-right"></div>
            </div>
        )
    }
}