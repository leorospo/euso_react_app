import React from 'react';
import propTypes from 'prop-types';
import './Login.css';
import help from '../../assets/img/help.svg'


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            check: false,
            rememberMe: {
                rememberEmail: "",
                rememberPassword: "",
            },
            errorEmail: {
                setErrorEmail: false,
                showErrorEmail: false,
            },
            errorPassword: {
                setErrorPassword: false,
                showErrorPassword: false,
            }
        }
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    checked() {
        this.setState({
            check: !this.state.check
        })

        this.state.check ||
            this.setState({
                rememberMe: {
                    rememberEmail: this.state.email,
                    rememberPassword: this.state.password,
                }
            })
    }

    errorEmail() {
        this.setState({
            errorEmail: {
                ...this.state.errorEmail,
                showErrorEmail: true,
            }
        })
    }

    errorPassword() {
        this.setState({
            errorPassword: {
                ...this.state.errorPassword,
                showErrorPassword: true,
            }
        })
    }

    deleteErrorEmail() {
        this.setState({
            errorEmail: {
                ...this.state.errorEmail,
                setErrorEmail: false,
            }
        })
    }

    deleteErrorPassword() {
        this.setState({
            errorPassword: {
                ...this.state.errorPassword,
                setErrorPassword: false,
            }
        })
    }

    render() {
        const { company, wksEmail } = this.props

        return (
            <div className="cnt-global center ">
                <div className="cnt-section-full g1">
                    <div className="cnt-onepage">

                        <div className="logo_azienda">
                            <img src={`assets/img/svg/${company.companyImg}`} alt={`${company.companyName} logo`} />
                        </div>


                        <form
                            className="form-wks-select"
                            onSubmit={() => alert(this.state.email, this.state.password)}>
                            <div className="input-container">

                                {this.state.errorEmail.setErrorEmail &&
                                    <div className="input-error-overlay input-error-overlay-email"
                                        onClick={() => this.errorEmail()}>

                                        {this.state.errorEmail.showErrorEmail && <span className="error-span sns-sp-416"> Corporate mail not found</span>}
                                        <img src={help} alt="error email"></img>
                                    </div>
                                }

                                <input className={`login-email ${this.state.errorEmail.setErrorEmail && 'input-error'}`}
                                    type="email" nome="email"
                                    placeholder={this.state.errorEmail.setErrorEmail ? undefined : 'Email'}
                                    value={wksEmail ? wksEmail : this.state.errorEmail.setErrorEmail ? undefined : this.state.email}
                                    onClick={() => this.deleteErrorEmail()}
                                    onChange={e => this.updateEmail(e)}
                                />

                                {this.state.errorPassword.setErrorPassword &&
                                    <div className="input-error-overlay input-error-overlay-password"
                                        onClick={() => this.errorPassword()}>

                                        {this.state.errorPassword.showErrorPassword && <span className="error-span sns-sp-416">Wrong password</span>}
                                        <img src={help} alt="error password"></img>
                                    </div>
                                }

                                <input className={`login-password ${this.state.errorPassword.setErrorPassword && 'input-error'}`}
                                    type="password" nome="password"
                                    placeholder={this.state.errorPassword.setErrorPassword ? undefined : 'Password'}
                                    value={this.state.errorPassword.setErrorPassword ? undefined : this.state.password}
                                    onClick={() => this.deleteErrorPassword()}
                                    onChange={e => this.updatePassword(e)}
                                />

                            </div>
                            <div className="form-footer-wks-select">

                                <div className="form-footer-wks-select-cnt">
                                    <label className="checkbox-cnt sns-sp-416 tg6">
                                        <input className="checkbox" type="checkbox" name="checkbox1"
                                            onChange={() => this.checked()}
                                        />
                                        Remember Me
                                    </label>
                                </div>

                                <button className="btn-primary form-wks-select-button" type="submit">LOGIN</button>

                            </div>

                        </form>

                        <div className="box_forgot">
                            <div className="forgot sns-sp-616 tg6" onClick={() => alert('pippo')}>Forgot your password?</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    company: propTypes.shape({
        companyName: propTypes.string.isRequired,
        companyImg: propTypes.string.isRequired
    }).isRequired,
    email: propTypes.string,
}