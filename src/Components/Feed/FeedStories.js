import React from 'react';

export default function FeedStories() {
  return (
    <>
      <div className="stories">
        <div className="storiesHeader">
          <p>stories</p>
          <p>watch all</p>
        </div>
        <ul className="storyList">
          {Array(10)
            .fill(1)
            .map((item, i) => (
              <li key={i}>
                <div className="imageWrapper">
                  <img src="images/profile.jpg" alt="profile" />
                  <img src="images/download.png" alt="download" />
                </div>
                <div className="ml-3">
                  <p>chasingafrica_</p>
                  <p>17 hours ago</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
