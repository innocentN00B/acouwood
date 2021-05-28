import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
      const geocode = await Location.reverseGeocodeAsync(location);
      setAddress(geocode);
      console.log("Location object is set to " + JSON.stringify({ address }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return address;
};
