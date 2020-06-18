import * as Permissions from "expo-permissions";
import { Platform, PermissionsAndroid } from "react-native";

class userPermission {
  getCameraPermission = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status != "granted") {
        alert("WE NEED PERMISSION TO USE YOUR CAMERA ROLL");
      }
    }
    if (Platform.OS === "android"){
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      )
      if (status != PermissionsAndroid.RESULTS.GRANTED) {
        alert("WE NEED PERMISSION TO USE YOUR CAMERA ROLL");
      }
    }
      /*try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            'title': 'Cool Photo App Camera Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                      'so you can take awesome pictures.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the camera")
        } else {
          console.log("Camera permission denied")
        }
      } catch (err) {
        console.warn(err)
      }*/
    
  }
}