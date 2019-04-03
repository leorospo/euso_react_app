import React from 'react';
import Icon from '../elements/Icon';
import Button from '../elements/Button';


//import propTypes from 'prop-types'

const chatInputPlaceholder = <div className="">Write something...</div>

export default class ChatBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: chatInputPlaceholder,
        }
    }

    clearInput = () => {
        if (this.state.content === chatInputPlaceholder) {
            this.setState({
                content: '',
            })
        }
    }

    setPlaceholder = () => {
        this.setState({
            content: chatInputPlaceholder,
        }, this.setChatBarHeightVar)
    }

    brRemove = (input) => {
        if (input.endsWith('<br>')) {
            input = input.substring(0, input.lastIndexOf('<'))
            return this.brRemove(input)
        } else {
            return input
        }
    }

    send = () => {
        let content = document.getElementById('chat_bar_input').innerHTML   //Contenteditable, handle with care!
        content = this.brRemove(content)

        if (content !== '') {
            this.props.sendCallback(content)
        }

        document.activeElement.blur()
        this.setPlaceholder()


    }

    setChatBarHeightVar() {
        let height = document.getElementById('chat_bar').clientHeight
        document.documentElement.style.setProperty('--chat-bar-height', height + 'px')
    }

    //Prevent div adding in contenteditable and enter behaviour
    enterHandler = (e) => {
        if (e.keyCode === 13) {
            if (e.shiftKey) {
                document.execCommand('insertHTML', false, '<br>');
                return false

            } else {
                e.preventDefault()
                this.send()
                return false
            }


        }
    }
    //&& document.getElementById('chat_bar_input').innerHTML !== ''


    render() {

        return (

            <div id="chat_bar" className="cnt-chat-bar g1">

                <Icon
                    encumbrance="large"
                    size="large"
                    color="tg3"
                    icon="mood"
                    onClick={() => alert("pippo")}
                />

                <div
                    id="chat_bar_input"
                    onFocus={this.clearInput}
                    className="chat-bar sns-sp-414 tg5 ffox-hide-scrollbarbar"
                    contentEditable="true"
                    onInput={this.setChatBarHeightVar}
                    onKeyDown={e => this.enterHandler(e)}
                >
                    {this.state.content}
                </div>

                <Icon
                    encumbrance="large"
                    size="large"
                    color="tg3"
                    icon="attach_file"
                    onClick={() => alert("pippo")}
                />

                <Button
                    shape="round"
                    size="medium"
                    type="button"
                    id="send-btn"
                    onClick={e => this.send(e.currentTarget)}
                >
                    <Icon
                        encumbrance="medium"
                        size="large"
                        optionalClass="send"
                        color="tFF"
                        icon="send"
                    />
                </Button>

            </div>
        )
    }
}

/* ChatBar.propTypes = {


} */
