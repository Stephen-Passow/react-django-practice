import React, { Component } from 'react'
import axios from 'axios'

export default class AllArtists extends Component {
    state = {
        allArtists: []
    }
    componentDidMount() {
        axios.get('/api/v1/artist')
            .then((res) => {
                const allArtists = res.data;
                this.setState({ allArtists: allArtists })
            })
    }

    render() {
        return (
            <div>
                {this.state.allArtists.map((artist) => {
                    return <div key={artist.id}>{artist.name}</div>
                })}
            </div>
        )
    }
}