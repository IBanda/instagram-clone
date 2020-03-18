import React from 'react';
import FeedHeader from './FeedHeader';
import FeedBody from './FeedBody';
import FeedFooter from './FeedFooter';
export default function Feed() {
  return (
    <div className="feedCard">
      <FeedHeader />
      <FeedBody />
      <FeedFooter />
    </div>
  );
}
