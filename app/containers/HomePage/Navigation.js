import React from 'react';
import NavigationSites from './NavigationSites';
import NavigationFloors from './NavigationFloors';

const Navigation = () => {
  return (
    <div>
      <h1>Navigation here</h1>
      <NavigationFloors />
      <NavigationSites />
    </div>
  );
}

export default Navigation;
