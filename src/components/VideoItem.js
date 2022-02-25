import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return props.video.map((video) => {
    return (
      <div
        key={video.id.videoId}
        onClick={() => props.onVideoClick(video)}
        className="video-container"
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div>
          <p>{video.snippet.title}</p>
          <p>{video.snippet.channelTitle}</p>
        </div>
      </div>
    );
  });
};

export default VideoItem;
