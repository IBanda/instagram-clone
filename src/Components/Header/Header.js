import React from 'react';
import Search from './Search';
import Menu from './Menu';

export default function Header() {
  return (
    <div className="container header">
      <div className="row">
        <div className="col-md-4 logoWrapper">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="col-md-4 searchWrapper">
          <Search />
        </div>
        <div className="col-md-4 menuWrapper">
          <Menu />
        </div>
      </div>
    </div>
  );
}
