import React, { useState } from 'react';
import Navigation from './pages/Navigation';

export const CityContext = React.createContext();
export const UserFeelLikeContext = React.createContext();
export const WeatherContext = React.createContext();

export default function App() {

  return (
      <WeatherContext.Provider value={ useState({}) }>
      <UserFeelLikeContext.Provider value={ useState() }>
      <CityContext.Provider value={ useState() }>
          <Navigation />
      </CityContext.Provider>
      </UserFeelLikeContext.Provider>
      </WeatherContext.Provider>
  );
}
