import React, { Component } from 'react';

import Search from '../../ui/components/search/search.jsx';
import Map from '../../ui/components/map/map.jsx';



// This component - represents the Home Page
export const Home = () =>
  <div id="home-page" className="container">
    <Search />
    <Map />
  </div>
