import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <iframe
          title="Video player"
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (video) {
    return (
      <div>
        <iframe
          title="Video player"
          id="ytplayer"
          type="text/html"
          height="405"
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <p style={{ fontSize: "3.2rem" }}>{video.snippet.title}</p>
        <p style={{ fontSize: "2.4rem" }}>{video.snippet.description}</p>
      </div>
    );
  }
};

export default VideoDetail;
