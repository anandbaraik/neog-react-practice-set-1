import { useState, useEffect } from "react";

import { fetchVideos } from "./API/fetchVideos";

export default () => {
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchVideos("https://example.com/api/videos");
      const {
        data: { videos }
      } = res;
      setVideoList(videos);
    } catch (err) {
      console.log(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = () => {
    const newArr = videoList.slice(1);
    setVideoList(newArr);
  };

  return (
    <div>
      <h2>Playlist</h2>
      {videoList.map(({ title, thumbnail, views, likes }) => {
        return (
          <div key={title} className="video-tile">
            <img src={thumbnail} alt="" />
            <div>
              <p>
                <strong>{title}</strong>
              </p>
              <p>
                <strong>Likes: </strong> {likes}
              </p>
              <p>
                <strong>Views: </strong> {views}
              </p>
            </div>
          </div>
        );
      })}
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};
