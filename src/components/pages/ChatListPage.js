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
            page: "chat",
            select: false,
        }
    }

    componentWillUpdate = () => {
        this.props.setUsers()
    }

    choose() {
        this.setState({
            select: true,
        })
    }

    render() {
        const { workspace, userId } = this.props;

        return (
            <div className="cnt-global">

                <div className="cnt-section-left">
                    <ListHeader
                        page={this.state.page}
                    />

                    <ChatList userId={userId} users={this.props.users} />

                    {!this.state.select ?
                        <Button
                            shape="round"
                            size="large"
                            optionalClass="btn-new-chat"
                            type="button"
                            onClick={() => { this.choose() }}
                        >
                            <Icon
                                encumbrance="medium"
                                size="large"
                                color="tFF"
                                icon="add"
                            />
                        </Button> :
                        <Link to="/contacts">
                            <Button
                                shape="round"
                                size="large"
                                optionalClass="btn-new-chat"
                                type="button"
                                onClick={() => this.props.selectContact()}
                            >
                                <Icon
                                    encumbrance="medium"
                                    size="large"
                                    color="tFF"
                                    icon="person"
                                />
                            </Button>

                            <Button
                                shape="round"
                                size="large"
                                optionalClass="btn-new-chat group-button"
                                type="button"
                                onClick={() => this.props.selectGroup()}
                            >
                                <Icon
                                    encumbrance="medium"
                                    size="large"
                                    color="tFF"
                                    icon="group"
                                />
                            </Button>
                        </Link>
                    }

                </div>
                <div className="cnt-section-right"></div>
            </div >
        )
    }
}