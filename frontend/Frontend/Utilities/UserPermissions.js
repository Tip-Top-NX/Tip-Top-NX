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
      const { status } = await PermissionsAndroid.request(
        PermissionsAndroid.CAMERA_ROLL
      );
      if (status != "granted") {
        alert("WE NEED PERMISSION TO USE YOUR CAMERA ROLL");
      }
    }
  };
}

export default new userPermission();
