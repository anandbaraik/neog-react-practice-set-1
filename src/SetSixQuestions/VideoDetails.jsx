import { useState, useEffect } from "react";

import { fetchVideoDetails } from "./API/fetchVideoDetails";

export default () => {
  const [videoDetails, setVideoDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [displayLabel, setDisplayLabel] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetchVideoDetails("https://example.com/api/getvideo");
      const {
        data: { videos }
      } = res;
      setisLoading(false);
      setVideoDetails(videos);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          <img src={videoDetails.thumbnail} alt="video tile" />
          <h3>{videoDetails.title}</h3>
          <p>
            <strong>Views: </strong>
            {videoDetails.views}
          </p>
          <p>
            <strong>Likes: </strong>
            {videoDetails.likes}
          </p>
          {displayLabel && (
            <p>
              <strong>Label: </strong>Self Motivational
            </p>
          )}
          <button disabled={displayLabel} onClick={() => setDisplayLabel(true)}>Add Label</button>
        </div>
      )}
    </div>
  );
};
