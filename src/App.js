import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./components/App.css";
import useVideo from "./Hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("hymn for the weekend");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <SearchBar onSubmit={search} />
      <div className="container">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default App;
