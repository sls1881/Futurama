import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import EpisodeList from '../components/episodes/EpisodeList';
import { getEpisodes } from '../services/RickAndMortyApi';

export default class RickAndMorty extends Component {
  state = {
    loading: true,
    episodes: [],
  };

  async componentDidMount() {
    const episodes = await getEpisodes();
    this.setState({
      loading: false,
      episodes,
    });
  }

  render() {
    const { loading, episodes } = this.state;
    return (
      <div>
        {loading === true && <Spinner />}
        {loading === false && <EpisodeList episodes={episodes} />}
      </div>
    );
  }
}
