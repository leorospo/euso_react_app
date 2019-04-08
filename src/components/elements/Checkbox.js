import React from 'react';
import propTypes from 'prop-types'
import './Checkbox.css';

export default class Checkbox extends React.Component {

    render() {
        const { onChange, optionalClass } = this.props
        return (
            <div className={"checkbox-cnt sns-sp-416 tg6"}>
                <input className={`checkbox ${optionalClass || ""}`} type="checkbox" name="checkbox1"
                    onChange={onChange}
                />
                {this.props.children}
            </div>
        )
    }
}

Checkbox.propTypes = {
    optionalClass: propTypes.string,
    children: propTypes.string,
    onChange: propTypes.func.isRequired,
}