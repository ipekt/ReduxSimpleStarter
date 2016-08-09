import React from 'react';

const VideoListItem = ({video}) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.default.url} alt=""/>
      <p>{video.snippet.title}</p>
    </li>
  );
};

export default VideoListItem;
