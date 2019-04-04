import React from "react";
import Button from '../elements/Button';
import Icon from '../elements/Icon';

export default class ChatListRowSwipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      silenced: false,
      favorited: false,
      deleted: false,
    };
  }

  setSilenced() {
    this.setState({
      silenced: !this.state.silenced
    })
  }

  setFavorited() {
    this.setState({
      favorited: !this.state.favorited
    })
  }

  setDeleted() {
    this.setState({
      deleted: !this.state.deleted
    })
  }

  render() {
    return (
      <div className="chat-list-element-content-swipe">
        <div className="icn-box-swipe">
          <Button
            shape={this.state.silenced ? `round` : `outlined`}
            size="medium"
            type="button"
            onClick={() => this.setSilenced()}
          >
            <Icon
              encumbrance="medium"
              size="large"
              color={this.state.silenced ? `tFF` : `tb1`}
              icon="notifications_off"
            />
          </Button>

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

          <Button
            shape={this.state.deleted ? `round` : `outlined`}
            size="medium"
            type="button"
            onClick={() => this.setDeleted()}
          >
            <Icon
              encumbrance="medium"
              size="large"
              color={this.state.deleted ? `tFF` : `tb1`}
              icon="delete"
            />
          </Button>

        </div>
      </div>
    );
  }
}
