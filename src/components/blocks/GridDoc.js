import React from 'react';
import propTypes from 'prop-types';

export default class GridDoc extends React.Component {

    render() {
        const { svg, name, date, index } = this.props
        return (
            <div className="document-list-element">

                <img className="document-img"
                    alt={name}
                    key={index}
                    src={`assets/img/svg/${svg}`}
                />
                <div className="document-list-element-content">

                    <div className="document-list-element-text">
                        <div className="document-list-element-title">
                            <div className="document-list-element-title-name sns-sp-620 tg6">{name}</div>
                        </div>

                        <div className="chat-list-element-subtitle sns-sp-416 tg3">{date}</div>
                    </div>
                </div>
                <div className=" document-list-sep"></div>

            </div>
        )
    }
}

GridDoc.propTypes = {
    svg: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
}