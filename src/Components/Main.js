import React from 'react';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import FeedSideBar from './Feed/FeedSideBar';

export default function Main() {
  return (
    <div>
      <div className="headerWrapper">
        <Header />
      </div>
      <div className="container feedWrapper">
        <div className="row">
          <div className="col-md-8">
            {Array(5)
              .fill(1)
              .map((item, index) => (
                <Feed key={index} />
              ))}
          </div>
          <div className="col-md-4 feedSideBarWrapper">
            <FeedSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
