import { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <section className="home">
                <div className="wave__1" />
                <div className="wave__2" />

                <h1 className="title">CLASH OF CODE</h1>
                
                <p className="description">
                    Amuse toi avec tes amis, créer des parties en local et
                    invite tous tes amis. <br></br>
                    Jouable de n'importe où avec une connexion ! Surtout 
                    en cours de Philosophie.
                </p>

                <button className="create">Créer</button>
                <button className="join">Rejoindre</button>

                <div className="front__image" />

                <h1 className="goal__title">Quel est le but du jeu ?</h1>

                <p className="goal__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis maximus ex ac nunc mollis lobortis. Aenean sollicitudin lectus ligula.
                Vivamus venenatis sed ipsum at tristique. Ut varius arcu eget diam aliquam suscipit. 
                Vivamus ut purus viverra, pellentesque arcu fermentum, pulvinar nunc. 
                Sed consequat nisl in tristique finibus. In varius tellus in diam accumsan mattis. 
                Curabitur venenatis ut augue et laoreet. Ut mollis pellentesque sem, vitae ullamcorper orci tempor at.
                Donec non mauris non lacus fringilla ornare quis eget augue.</p>
                
                
                <div className="down__main"/>
                <h2 className="greensubtitle__1">Bats toi avec tes amis</h2>
                <h2 className="greensubtitle__2">pour être le premier à finir !</h2>
                <h2 className="pinksubtitle__1">Essaie de les frainer</h2>
                <h2 className="pinksubtitle__1">le plus possible !</h2>
            </section>
        )
    }

}