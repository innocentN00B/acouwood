import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  const requestLocationPermission = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      location = await Location.getLastKnownPositionAsync();
      setLocation(location);
      const address = await Location.reverseGeocodeAsync(location);
      setAddress(address);
      console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);
  return address;
};

export default useLocation;
