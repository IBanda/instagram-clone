import React from 'react';

export default function FeedHeader() {
  return (
    <>
      <div className="feedHeader">
        <div className="leftContainer">
          <div className="imageWrapper">
            <img src="images/profile.jpg" alt="profile" />
            <img src="images/download.png" alt="download" />
          </div>
          <div className="ml-3">
            <p className="username">chasingafrica_</p>
            <p className="location">south africa</p>
          </div>
        </div>
        <div className="rightContainer">
          <button>
            <img src="images/more.svg" alt="more" />
          </button>
        </div>
      </div>
    </>
  );
}
