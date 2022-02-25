import React from "react";
import VideoItem from "./VideoItem";

const YoutubeList = (props) => {
  return (
    <div className="video-list">
      <VideoItem onVideoClick={props.onVideoSelect} video={props.videos} />
    </div>
  );
};

export default YoutubeList;
