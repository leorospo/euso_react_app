import React from "react";
import Button from '../elements/Button';
import Icon from '../elements/Icon';

export default class ChatListRowSwipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorited: false,
        };
    }

    setFavorited() {
        this.setState({
            favorited: !this.state.favorited
        })
    }

    render() {
        return (
            <div className="chat-list-element-content-swipe">
                <div className="icn-box-swipe">

                    <Button
                        shape={this.state.favorited ? `round` : `outlined`}
                        size="medium"
                        type="button"
                        onClick={() => this.setFavorited()}
                    >
                        <Icon
                            encumbrance="medium"
                            size="large"
                            color={this.state.favorited ? `tFF` : `tb1`}
                            icon="star"
                        />
                    </Button>

                </div>
            </div>
        );
    }
}
