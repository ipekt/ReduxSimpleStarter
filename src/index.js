import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './api_key';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('snow cats');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term},
      (videos) => this.setState({
          videos,
          selectedVideo: videos[0]
        }
      ));
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('.container'));

