import React from 'react';
import propTypes from 'prop-types';
import Button from '../elements/Button';
import './Login.css';
import help from '../../assets/img/help.svg';
import { Redirect } from "react-router-dom";
import { login } from '../../api'
import Checkbox from '../elements/Checkbox';


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.wksEmail || "",
            password: "",
            check: false,
            errorEmail: {
                setErrorEmail: false,
                showErrorEmail: false,
            },
            errorPassword: {
                setErrorPassword: false,
                showErrorPassword: false,
            },
            successfulLogin: false,
        }
    }

    updateEmail(event) {
        this.state.errorEmail.setErrorEmail &&
            this.setState({
                errorEmail: {
                    ...this.state.errorEmail,
                    setErrorEmail: false,
                }
            })

        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event) {
        this.state.errorPassword.setErrorPassword &&
            this.setState({
                errorPassword: {
                    ...this.state.errorPassword,
                    setErrorPassword: false,
                }
            })

        this.setState({
            password: event.target.value
        })
    }

    checked() {
        this.setState({
            check: !this.state.check
        })
    }

    errorEmail() {
        this.setState({
            errorEmail: {
                ...this.state.errorEmail,
                showErrorEmail: !this.state.errorEmail.showErrorEmail
            }
        })
    }

    errorPassword() {
        this.setState({
            errorPassword: {
                ...this.state.errorPassword,
                showErrorPassword: !this.state.errorPassword.showErrorPassword,
            }
        })
    }

    loginErrorHandling = (code, message) => {
        switch (code) {
            case 'auth/invalid-email':
            case 'auth/user-not-found':
            case 'auth/user-disabled':
                this.setState({
                    errorEmail: {
                        setErrorEmail: true,
                        showErrorEmail: false,
                    },
                })
                break;
            case 'auth/wrong-password':
                this.setState({
                    errorPassword: {
                        setErrorPassword: true,
                        showErrorPassword: false,
                    },
                })
                break;
            default:
                console.error(code, message)
                break;
        }
    }

    onSubmit = (email, password, event) => {
        event.preventDefault()
        login(email, password)
            .then(
                () => { this.setState({ successfulLogin: true }) },
                (error) => { this.loginErrorHandling(error.code, error.message) }
            )
    }

    render() {

        if (this.state.successfulLogin) {
            return (
                <Redirect to="/" />
            )
        }

        const { workspace } = this.props

        if (!workspace) {
            return <Redirect to="/wks-select" />

        }
        else return (
            <div className="cnt-global center ">
                <div className="cnt-section-full g1">
                    <div className="cnt-onepage">

                        <div className="logo_azienda">
                            <img src={`assets/img/svg/${workspace.companyImg}`} alt={`${workspace.companyName} logo`} />
                        </div>


                        <form
                            className="form-login-select"
                            onSubmit={(e) => this.onSubmit(this.state.email, this.state.password, e)}>
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
                                    value={this.state.email}

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

                                    onChange={e => this.updatePassword(e)}
                                />

                            </div>
                            <div className="form-footer-login-select">

                                <div className="form-footer-login-select-cnt">
                                    <Checkbox optionalClass="checkbox-login" onChange={() => this.checked()}>
                                        Remember
                                    </Checkbox>
                                </div>

                                <Button
                                    shape="square"
                                    size="medium"
                                    optionalClass="wks-select-button"
                                    type="submit"
                                >
                                    LOGIN
                                </Button>

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
    workspace: propTypes.shape({
        companyName: propTypes.string.isRequired,
        companyImg: propTypes.string.isRequired
    }).isRequired,
}