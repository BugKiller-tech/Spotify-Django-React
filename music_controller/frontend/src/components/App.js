import React, { Component } from 'react'
import { render } from 'react-dom'
import HomePage from './HomePage'

export default class App extends Component {
    state = {
        name: 'hkg'
    }

    render () {
        return (
            <>
                <HomePage />
            </>
        )
    }
}

const appDiv = document.querySelector('#app')
render(<App />, appDiv)