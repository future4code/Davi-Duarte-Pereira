import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const MainContainer = styled.div`

`

const apiToken =  '2e5d5c8bae5833240293b84f2249cff3';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class Spotif4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userPlaylistName: '',
            playlists: [],
            playlistMusics: [], 
        };
    };

    fetchAllPlaylistsMusics = (playlistId) => {
        axios.get(
            `${baseUrl}/playlists/getPlaylistMusics/${playlistId}`,
            {
                headers: {
                    auth: apiToken
                }
            }
        ).then((response) => {
            this.setState({
                playlistMusics: response.data.result.musics
            });
        }).catch(() => {
            window.alert('something went wrong.')
        });
    };

    fetchAllPlaylists = () => {
        axios.get(
            `${baseUrl}/playlists/getAllPlaylists`,
            {
                headers: {
                    auth: apiToken
                }
            }
        ).then((response) => {
            this.setState({playlists: response.data.result.list});
        }).catch((error) => {
            window.alert(error)
        });
    };

    componentDidMount() {
        this.fetchAllPlaylists();
    };

    createNewPlaylist = () => {
        const userPlaylistName = {
            name: this.state.userPlaylistName,
        };


        axios.post(
            `${baseUrl}/playlists/createPlaylist`,
            userPlaylistName,
            {
                headers: {
                    auth: apiToken
                }

            }
        ).then((response) => {
            console.log(response);
            window.alert('Playlist created successfuly');
            this.fetchAllPlaylists();
        }).catch(() => {
            window.alert('Something went wrong. Try again.');
        });
    };

    handlePlaylistNameInput = (event) => {
        this.setState({userPlaylistName: event.target.value});
    };

    deleteSelectedPlaylist = (playlistId) => {
        axios.delete(
            `${baseUrl}/playlists/deletePlaylist?playlistId=${playlistId}`,
            {
                headers: {
                    auth: apiToken
                }
            }
        ).then(() => {
            window.alert('The playlist was deleted sucessfuly.');
            this.fetchAllPlaylists();
        }).catch(() => {
            window.alert('Something went wrong. Try again.');
        });
    };

    render(){

        const teste = this.state.playlists.map(ids => ids.id)

        console.log(teste)

        console.log(this.state.playlistMusics);

        const playlistMusics = this.state.playlistMusics.map((music) => {
            return (
                <div key={music.id} >
                    <h3>{music.name}</h3>
                    <p>{music.artist}</p>
                    <hr />
                </div>
            )
        });

        const playlistList = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <h1>{playlist.name}</h1>
                    <p onClick={() => {this.deleteSelectedPlaylist(playlist.id)}}>X</p>
                    <button onClick={() => {this.fetchAllPlaylistsMusics(playlist.id)}}>Show playlist musics</button>
                    {playlistMusics}
                </div>
            )
        });

        return (
            <MainContainer>
                <div className="formNewPlaylist">
                    <label htmlFor="playlist_name">Set the name of your new playlist: </label>
                    <input type="text" name="playlist_name" onChange={this.handlePlaylistNameInput} />
                    <button onClick={this.createNewPlaylist}>Create</button>
                </div>
                {playlistList}
            </MainContainer>
        );
    };
};

export default Spotif4;