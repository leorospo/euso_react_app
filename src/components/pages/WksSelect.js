import React from 'react';
import './WksSelect.css';
import logo from '../../assets/img/euso.png'


export default class WksSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: false,
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
                        <div className="logo">
                            <img src={logo} alt="hexagon based logo" />
                        </div>
                        <div className="sns-sp-718 tg6">
                            <div>SELECT YOUR WORKSPACE</div>
                        </div>
                        <form
                            className="form-wks-select"
                            onSubmit={() => alert(this.state.email)}
                        >
                            <label className={`sns-sp-616 ${this.state.error ? 'tr1' : 'tg6'}`}>{
                                this.state.error ? 'Corporate mail not found!' : 'Enter your corporate mail'}</label>
                            <input
                                type="email"
                                nome="email"
                                onChange={e => this.updateEmail(e)} value={this.state.email}
                                className={this.state.error ? 'input-error' : null}
                            />
                            <button
                                className="btn-primary form-wks-select-button"
                                type="submit"
                            >SUBMIT</button>
                        </form>

                    </div>
                </div>
            </div >
        );
    }
}