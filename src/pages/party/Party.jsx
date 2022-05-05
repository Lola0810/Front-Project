import { Component } from "react";

import Error from '../components/Error';

import Waiting from "./Waiting";
import Game from './Game';
import { getRoom } from "../../public/api";

export default class Party extends Component {

    constructor(props) {
        super(props)

        this.state = {inGame: null}
    }

    componentDidMount() {
        const id = window.location.pathname.replace('/partie/', '')
        getRoom(id).then(a => {
            this.setState({
                inGame: a.data.inGame
            });
        }).catch(b => {
            this.setState({
                inGame: "none"
            })
        })
    }


    render() {
        const inGame = this.state
        if(typeof inGame !== "boolean" && inGame !== "none")
            return <div />
        let render;
        switch(inGame) {
            case false:
                render = <Waiting/>
                break;
            case true:
                render = <Game/>
                break;
            default:
                render = <Error code="404" message="Aucune partie trouvé" />
                break;
        }
        return render
    }

} 