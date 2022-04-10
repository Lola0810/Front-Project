import { Component } from "react";

import {Timer} from '../public/utils';


export default class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {party: null}
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

    render() {
        const { party } = this.state
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
                            {new Array(5).fill('').map((_,i) =>
                                <div key={i} className="user">
                                    <img src={require('../public/images/test.jfif')} alt="user" />
                                    <h4>Pseudo</h4>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="left">
                        <div className="top">
                            <h1>Chat room <span>#{party}</span></h1>
                        </div>

                        <div className="container">
                            <div className="message">
                                <span className="author">Pseudo</span>
                                <p>Message....</p>
                                <span className="date">envoyé à 05:41</span>
                            </div>

                            <div className="message">
                                <span className="author">Pseudo</span>
                                <p>Message....</p>
                                <span className="date">envoyé à 05:41</span>
                            </div>
                        </div>

                        <input placeholder="Envoyer un message..." />
                    </div>
                </div>
            </section>
        )
    }

}