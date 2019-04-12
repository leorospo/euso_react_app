import React from "react";
import propTypes from 'prop-types';
import Icon from '../elements/Icon';
import "./ListRow.css";
import { Link } from 'react-router-dom'

export default class ChatListRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    
    render() {
        const { settings } = this.props;
        return (

            <div className="settings-list-element c-w" >
                <Icon
                    encumbrance="large"
                    size="large"
                    color="tb1"
                    icon={settings.icon}
                />

                <div className="settings-list-element-content">
                    <div className="settings-list-element-content-text">
                        <div className="settings-list-element-title-name sns-sp-418 tg4">{settings.text}</div>
                    </div>

                    <Icon
                        encumbrance="large"
                        size="large"
                        color="tb1"
                        icon="arrow_forward_ios"
                    />

                </div>

                <div className="settings-list-sep" />
            </div>

        );
    }
}
