import { PermissionsAndroid } from 'expo';
import { Location } from 'expo-location';

const requestLocationPermission = async () => {
  const permission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message:
        'Cartographer needs access to your location'+
       'so we can track your travels.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    }
  );

  if (permission === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('You can use the location');
    return true;
  } else {
    console.log('Location permission denied');
    return false;
  }
};

const getLocation = async () => {
  if (await requestLocationPermission()) {
    const location = await Location.getCurrentPositionAsync({});
    return location;
  } else {
    return null;
  }
};

export default getLocation;