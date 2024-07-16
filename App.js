import React from 'react';
import Navigation from './pages/Navigation';

export const CITY = React.createContext("도시");
export default function App() {
  return (
      <CITY.Provider value="도시">
          <Navigation />
      </CITY.Provider>
  );
}
