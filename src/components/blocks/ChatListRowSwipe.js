import React from "react";

export default class ChatListRowSwipe extends React.Component {
  render() {
    return (
      <div className="chat-list-element-content-swipe">
        <div className="icn-box-swipe">
          <div className="btn-round-favorite-44">
            <div className="icn-cnt-44 b2">
              <i className="material-icons ">notifications_off</i>
            </div>
          </div>
          <div className="btn-round-favorite-44">
            <div className="icn-cnt-44 b2">
              <i className="material-icons ">star</i>
            </div>
          </div>
          <div className="btn-round-favorite-44">
            <div className="icn-cnt-44 b2">
              <i className="material-icons ">delete</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
