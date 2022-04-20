import { Component } from "react";

import Error from '../components/Error';

export default class Game extends Component {

    constructor(props) {
        super(props)

        this.state = {
            party: null,
            Afunction: 0, // fonction actuelle (index),
            hasError: false
        }

        this._testFunction = this._testFunction.bind(this)
        this._setError = this._setError.bind(this)
        this._getFunction = this._getFunction.bind(this)
    }

    componentDidMount() {
        if(this.props.data)
            this.setState({ party: this.props.data })
    }

    _setError(error=false) {
        this.setState({ hasError: error })
    }

    _getFunction() {
        return this.state.party.functions[this.state.Afunction]
    }

    _testFunction() {
        const { awnser } = this._getFunction()
        let { textContent } = document.querySelector('.coding__area')
        textContent = textContent.trim() // le code
        if(textContent.length === 0)
            return this._setError(true)
        this.setState({ Afunction: this.state.Afunction+1 })
        if(awnser === textContent) {
            this._setError()
            console.log('code bon !')
            return
        }

        this._setError(true)
        console.log('code pas bon..')
    }

    render() {
        const party = this.state.party
        if(!party)
            return <Error code="404" message="Partie introuvable" />
        const { instruction } = this._getFunction()

        return (
            <section className="game__section">
                <div className="middle__box">
                    <div className="right">
                        <h2>Fonction {this.state.Afunction+1}/{this.state.party.functions.length}</h2>
                    
                        <div className="frame">
                            <div contentEditable="true" className="coding__area" />

                            <button onClick={this._testFunction}
                                className={"run " + this.state.hasError ? 'error' : 'success'}>
                                    Lancer le test</button>
                        </div>
                    </div>
                <div className="left">
                    <div className="instruction">{instruction}</div>
                    <button className="left__button">Quitter la partie</button>

                    <div className="leaderboard" />
                </div>
                </div>
            </section>
        )
    }

}