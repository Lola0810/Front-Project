import { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = { redirect: false };
  }

  handleButton(e) {
    this.setState({
      redirect: true,
      func: e.target.id,
    });
  }

  render() {
    return this.state.redirect ? (
      <Navigate to={"/" + this.state.func}></Navigate>
    ) : (
      <section className="home">
        <div className="wave__1" />
        <div className="wave__2" />

        <div className="presentation">
          <div className="left">
            <h1 className="title">CLASH OF CODE</h1>
            <h2 className="description">
              Amuse toi avec tes amis, créer des parties en local et invite tous
              tes amis. <br />
              Jouable de n'importe où avec une connexion ! Surtout en cours de
              Philosophie.
            </h2>

            <button className="create" onClick={this.handleButton} id="create">
              Créer
            </button>
            <button className="join" onClick={this.handleButton} id="join">
              Rejoindre
            </button>
          </div>
          <div className="front__image" />
        </div>

        <div className="goal">
          <h1 className="title">Quel est le but du jeu ?</h1>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            maximus ex ac nunc mollis lobortis. Aenean sollicitudin lectus
            ligula. Vivamus venenatis sed ipsum at tristique. Ut varius arcu
            eget diam aliquam suscipit. Vivamus ut purus viverra, pellentesque
            arcu fermentum, pulvinar nunc. Sed consequat nisl in tristique
            finibus. In varius tellus in diam accumsan mattis. Curabitur
            venenatis ut augue et laoreet. Ut mollis pellentesque sem, vitae
            ullamcorper orci tempor at. Donec non mauris non lacus fringilla
            ornare quis eget augue.
          </p>
        </div>

        <div className="deeper__background">
          <div className="field">
            <div className="empty__image" />

            <div className="subtitle green">
              <h2>Bats toi avec tes amis</h2>
              <h2>pour être le premier à finir !</h2>
            </div>
          </div>

          <div className="field">
            <div className="empty__image" />

            <div className="subtitle pink">
              <h2>Essaie de les freiner</h2>
              <h2>le plus possible !</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
