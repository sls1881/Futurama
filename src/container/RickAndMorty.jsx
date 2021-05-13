import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import EpisodeList from '../components/episodes/EpisodeList';
import { getEpisode, getEpisodes } from '../services/RickAndMortyApi';
import Controls from '../components/episodes/Controls';

export default class RickAndMorty extends Component {
  state = {
    loading: true,
    episodes: [],
    episodeNumber: '',
  };

  async componentDidMount() {
    const episodes = await getEpisodes();
    this.setState({
      loading: false,
      episodes,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      episodeNumber: target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    const episodes = await getEpisode(this.state.episodeNumber);
    this.setState({
      loading: false,
      episodes,
    });
  };

  render() {
    const { loading, episodes, episodeNumber } = this.state;
    return (
      <div>
        <Controls
          episodeNumber={episodeNumber}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h1>Rick and Morty Episodes</h1>
        {loading === true && <Spinner />}
        {loading === false && <EpisodeList episodes={episodes} />}
      </div>
    );
  }
}
