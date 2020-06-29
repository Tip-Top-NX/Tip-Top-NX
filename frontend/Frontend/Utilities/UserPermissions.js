import * as Permissions from "expo-permissions";
import { Platform, PermissionsAndroid } from "react-native";

class userPermission {
  getCameraPermission = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("WE NEED PERMISSION TO USE YOUR CAMERA ROLL");
      }
    }
    if (Platform.OS === "android") {
      // console.log("yes");
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("You can use the camera");
      } else {
        alert("WE NEED PERMISSION TO USE YOUR CAMERA ROLL");
      }
    }
  };
}

export default new userPermission();
