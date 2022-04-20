import { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <section className="home">
                <div className="wave__1" />
                <div className="wave__2" />

                <div className="presentation">
                    <div className="left">
                        <h1 className="title">CLASH OF CODE</h1>
                        <h2 className="description">
                            Amusez-vous avec vos amis en codant tout plein de
                            fonctions, des plus faciles aux plus dures !
                        <br />
                        Créez des parties et invitez tous vos amis pour 
                        s'améliorer en programmation tout en
                        s'amusant !

                        </h2>

                        <button className="create">Créer</button>
                        <button className="join">Rejoindre</button>
                    </div>
                    <div className="front__image" />
                </div>

                <div className="goal">
                    <h1 className="title">Quel est le but du jeu ?</h1>

                    <p className="description">Clash of code est un jeu compétitif dans lequel l'objectif de chaque joueur
                        est de finir de programmer les fonctions demandées. 
                    <br />
                        Vous devez être le premier à finir de programmer toutes les fonctions avant vos adversaires !
                    <br />
                        Le plus vite les fonctions seront faites et le plus rapidement vous pourrez
                        les finir avant vos adversaires.
                    <br />
                        Soyez le mieux classé pour prouver votre niveau et rétamer vos adversaires.
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
                            <h2>Essaie de les frainer</h2>
                            <h2>le plus possible !</h2>
                        </div>
                    </div>

                </div>
            </section>
        )
    }

}