import React from 'react';
//import propTypes from 'prop-types';
import Chat from '../../components/blocks/Chat';


export default class ChatPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (

            <div className="cnt-global">

                <div className="cnt-section-left">

                    <div className="header content-sb">

                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons settings">settings</i>
                            </div>
                        </a>
                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons search">search</i>
                            </div>
                        </a>
                        <a href="###">
                            <div className="icn-cnt-44 tFF">
                                <i className="material-icons favorite">star_border</i>
                            </div>
                        </a>

                    </div>
                    <Chat />
                </div>
            </div>

        );
    }
}
