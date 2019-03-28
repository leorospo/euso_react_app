import React from 'react';
import './Login.css';
import help from '../../assets/img/help.svg'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { company, email } = this.props

        return (
            <input
                className={`login-email ${this.state.errorEmail.setErrorEmail && 'input-error'}`}
                type="email"
                name="email"
                placeholder={this.state.errorEmail.setErrorEmail ? undefined : 'Email'}
                value={this.state.rememberMe.email ? this.state.rememberMe.email : this.state.errorEmail.setErrorEmail ? undefined : this.state.email}
                onClick={() => this.dd()}
                onChange={e => this.updateEmail(e)}
            />
        )
    }
}