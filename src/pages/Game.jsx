import { Component } from "react";
import { Navigate } from "react-router-dom";
import { getRoom, getUserMe, leaveRoom } from "../public/api";
import { Timer } from "../public/utils";
import Message from "./components/Message";
import User from "./components/User";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleQuit = this.handleQuit.bind(this);
    this.state = { party: null, value: null, messages: [], room: false, quit: false };
  }

  componentDidMount() {
    const id = window.location.pathname.replace("/", "");
    const timer = new Timer("5m");

    this.setState({
      party: id,
      timer: timer,
      time: timer.toString(),
    });

    getRoom(id).then(b => {
      this.setState({
        room: b.data,
      });
    });

    getUserMe().then(a =>
      this.setState({
        user: a.data,
      }),
    );
  }

  handleSubmit(event) {
    const messages = this.state.messages;
    messages.push({ text: this.state.value, pseudo: "t", timestamp: Date() });
    this.setState({
      messages: messages,
    });
    // Post message ici inchallah
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  messageOwner() {
    return <Message message="Vous êtes l'owner de la room" />;
  }

  handleQuit() {
    if (window.confirm("Saucisse")) {
      leaveRoom();
      this.setState({
        quit: true,
      });
    }
  }

  render() {
    const { party, messages } = this.state;
    if (!this.state.timer) return <div />;

    if (this.state.room === null || (this.state.user.roomID && this.state.room.id !== this.state.user.roomID)) {
      if (this.state.room) leaveRoom();
      return <Navigate to="/join" />;
    }

    if (this.state.quit) {
      return <Navigate to="/" />;
    }

    /*this.state.timer.start((timer) => {
            this.setState({
                time: timer.toString()
            })
        })*/

    return (
      <section className="game__section">
        <div className="middle__box">
          <div className="right">
            <button className="left__button" onClick={this.handleQuit}>
              Quitter la partie
            </button>
            <h1>
              Débute dans <span id="time">{this.state.time}</span>
            </h1>

            <div className="middle">
              <button>Démarrer la partie</button>
            </div>

            <div className="users">
              {new Array(5).fill("").map((_, i) => (
                <User key={i} name={"user" + i} />
              ))}
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h1>
                Chat room <span>#{party}</span>
              </h1>
            </div>

            <ul className="container" id="container" style={{ overflowY: "scroll", height: "600px" }}>
              {this.state.room?.owner === this.user.id ? this.messageOwner() : ""}
              {messages.map((msg, i) => (
                <Message message={msg.text} pseudo={msg.pseudo} timestamp={msg.timestamp} key={i} />
              ))}
            </ul>
            <input placeholder="Envoyer un message..." type="text" onChange={this.handleChange} />
            <input type="submit" onClick={this.handleSubmit} />
          </div>
        </div>
      </section>
    );
  }
}
