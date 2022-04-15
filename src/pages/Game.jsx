import { Component } from "react";
import {  } from "../public/api";
import {Timer} from '../public/utils';
import Message from "./components/Message";
import User from "./components/User";
export default class Game extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {party: null, value: null, messages: []}
    }

    componentDidMount() {
        const id = window.location.pathname
                    .replace('/', '')
        const timer = new Timer('5m')

        this.setState({
            party: id,
            timer: timer,
            time: timer.toString()
        })
    }

    handleSubmit(event){
        const messages = this.state.messages
        messages.push({text: this.state.value, pseudo : 't', timestamp: Date()})
        this.setState({
            messages: messages
        })
        // Post message ici
        event.preventDefault();
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        const { party, messages } = this.state
        if(!this.state.timer)
            return <div />

        /*this.state.timer.start((timer) => {
            this.setState({
                time: timer.toString()
            })
        })*/

        return (
            <section className="game__section">
                <div className="middle__box">
                    <div className="right">
                        <button className="left__button">Quitter la partie</button>
                        <h1>Débute dans <span id="time">{this.state.time}</span></h1>

                        <div className="middle">
                            <button>Démarrer la partie</button>
                        </div>

                        <div className="users">
                            {new Array(5).fill('').map((_,i) => <User key={i}/>)}
                        </div>
                    </div>
                    <div className="left">
                        <div className="top">
                            <h1>Chat room <span>#{party}</span></h1>
                        </div>

                        <ul className="container" id="container" style={{"overflow-y" : "scroll", height: "600px"}}>
                            {messages.map((msg, i) => <Message message={msg.text} pseudo={msg.pseudo} timestamp={msg.timestamp} key={i}/>)}
                        </ul>
                        <input placeholder="Envoyer un message..." type="text" onChange={this.handleChange}/>
                        <input type="submit" onClick={this.handleSubmit}/>
                    </div>
                </div>
            </section>
        )
    }

}