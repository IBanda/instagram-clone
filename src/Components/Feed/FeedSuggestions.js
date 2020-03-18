import React from 'react';
import { Link } from 'react-router-dom';
export default function FeedSuggestions() {
  return (
    <>
      <div className="suggestions">
        <div className="suggestionsHeader">
          <p>suggestions for you</p>
          <p>see all</p>
        </div>
        <ul>
          {Array(3)
            .fill(1)
            .map((item, i) => (
              <li key={i}>
                <div className="imageWrapper">
                  <img src="images/profile.jpg" alt="profile" />
                  <img src="images/download.png" alt="download" />
                </div>
                <div className="ml-3">
                  <p>circuszambia</p>
                  <p>Followed by thebestofzambia</p>
                </div>
                <Link to="/#">follow</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
