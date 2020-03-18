import React from 'react';
import { Link } from 'react-router-dom';
import FeedStories from './FeedStories';
import FeedSuggestions from './FeedSuggestions';
const resources = [
  'about',
  'help',
  'press',
  'api',
  'jobs',
  'privacy',
  'terms.'
];
const access = ['locations', 'top-accounts', 'hashtags', 'language'];
export default function FeedSideBar() {
  return (
    <div className="feedSideBar">
      <div className="profile">
        <Link to="/#">
          <img src="images/myprofile.jpg" alt="myprofile" />
        </Link>
        <div className="myInfo">
          <p>official_visitzambia</p>
          <p>visit zambia</p>
        </div>
      </div>
      <FeedStories />
      <FeedSuggestions />
      <ul className="resources">
        {resources.map((item, i) => (
          <li key={i}>
            <Link to="/#">{item}</Link>
          </li>
        ))}
      </ul>
      <ul className="resources">
        {access.map((item, i) => (
          <li key={i}>
            <Link to="/#">{item}</Link>
          </li>
        ))}
      </ul>
      <p className="copyRight">© 2020 INSTAGRAM FROM FACEBOOK</p>
    </div>
  );
}
