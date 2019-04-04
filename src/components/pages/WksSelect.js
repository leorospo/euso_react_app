import React from 'react';
import './WksSelect.css';
import logo from '../../assets/img/euso.png';
import { Redirect } from 'react-router-dom';
import Button from '../elements/Button';


export default class WksSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            error: false,
            succesfulSelection: false,
        }
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value,
        })
    }


    onSubmit = (event) => {

        event.preventDefault()

        // TODO:
        // Cercare l'estenzione di dominio nel DB (@born2code.it)
        // Se è presente prendi l'ID del workspace
        // Setta lo stato globale dell'app con setWorkspace()
        // Se non è presente setta lo state error: true

        /* var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/workspaces/' + userId).once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
        });
 */
        this.props.setWorkspace({
            id: 'x9vqKsWGxFfCbl7J',
            companyName: 'born2code',
            companyImg: 'groupama.svg',
        })

        this.setState({ succesfulSelection: true })
    }

    render() {

        if (this.state.succesfulSelection) {
            return (
                <Redirect to="/login" />
            )
        }

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
                            onSubmit={(e) => this.onSubmit(e)}
                        >
                            <label className={`sns-sp-616 ${this.state.error ? 'tr1' : 'tg6'}`}>{
                                this.state.error ? 'Corporate mail not found!' : 'Enter your corporate mail'}</label>
                            <input
                                type="email"
                                name="email"
                                onChange={e => this.updateEmail(e)} value={this.state.email}
                                className={`wks-input${this.state.error ? ' input-error' : ''}`}
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
            </div >
        );
    }
}