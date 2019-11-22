import React, { Component } from 'react'
import axios from 'axios'

export default class SingleArtist extends Component {
    state = {
        singleArtist: ''
    }
    componentDidMount() {
        axios.get('/api/v1/artist/:id')
            .then((res) => {
                const singleArtist = res.data;
                this.setState({ singleArtist: singleArtist })
            })
    }
    render() {
        return (
            <div>
                {this.state.singleArtist.name}
            </div>
        )
    }
}