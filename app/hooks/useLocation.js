import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { add } from "react-native-reanimated";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [address, setAddress] = useState();

  const requestLocationPermission = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
      const address = await Location.reverseGeocodeAsync(location);
      setAddress(address);
      console.log(address);
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
