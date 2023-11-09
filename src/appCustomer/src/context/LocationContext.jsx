import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';

export const LocationContext = createContext();

export default function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentLocation = await getCurrentPositionAsync();
      setLocation(currentLocation);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  const { location, setLocation } = context;
  return { location, setLocation };
}
