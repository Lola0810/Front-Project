import { Component } from "react";

import Error from '../components/Error';

import Waiting from "./Waiting";
import Game from './Game';

export default class Party extends Component {

    constructor(props) {
        super(props)

        this.state = {party: null}
    }

    componentDidMount() {
        const id = window.location.pathname.replace('/partie/', '')
        this.setState({
            party: {
                id: +id,
                state: 'IN_GAME',
                functions: [{
                    instruction: 'zizi caca',
                    awnser: '10 10 10'
                }]
            }
        })
    }


    render() {
        const party = this.state.party
        if(!party)
            return <div />
        let render;
        switch(party.state) {
            case 'WAITING':
                render = <Waiting data={party} />
                break;
            case 'IN_GAME':
                render = <Game data={party} />
                break;
            default:
                render = <Error code="404" message="Aucune partie trouvé" />
                break;
        }
        return render
    }

} 