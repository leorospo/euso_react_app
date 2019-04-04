import React from 'react';
import Button from '../elements/Button';
import './ResetPassword.css';



export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: true,
        }
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value,
        })
    }

    render() {
        return (
            <div className="cnt-global center ">
                <div className="cnt-full g1">
                    <div className="cnt-onepage">
                        <div className="sns-sp-718 tg6">
                            <div>RESET PASSWORD</div>
                        </div>
                        <div className="reset-sns-sp-416 tC"> You will recieve an e-mail with a link to reset your password. </div>
                        <form className="form-rst-select"
                            onSubmit={() => alert(this.state.email)}>
                            <label className={`sns-sp-616 ${this.state.error ? 'tr1' : 'tg6'}`}>{
                                this.state.error ? 'Corporate mail not found!' : 'Enter your corporate mail'}
                            </label>
                            <input
                                type="email"
                                nome="email"
                                onChange={e => this.updateEmail(e)} value={this.state.email}
                                className={this.state.error ? 'input-error' : null}
                            />
                            
                            <Button
                                shape="square"
                                size="medium"
                                optionalClass="wks-select-button"
                                type="submit"
                            >
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}