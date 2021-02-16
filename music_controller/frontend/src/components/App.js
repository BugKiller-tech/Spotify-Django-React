import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <h1>Testing React app</h1>
        )
    }
}

const appDiv = document.querySelector('#app')
render(<App />, appDiv)