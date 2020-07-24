import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";

const ContactUs = () => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${21.0104205},${75.5621715}`;
  const label = "Tip Top NX";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  return (
    <View>
      <Button
        color={"#bdc3c7"}
        onPress={() =>
          Linking.openURL("whatsapp://send?text=&phone=919422284234")
        }
        title="Click To send"
      />
      <Button
        onPress={() => Linking.openURL("mailto:support@example.com")}
        title="nxtiptop@gmail.com"
      />
      <Button
        onPress={() => Linking.openURL(url)}
        title="Open Store Location On Maps"
      />
      <Button onPress={() => Linking.openURL(`tel:${2234147}`)} title="call" />
    </View>
  );
};

export default ContactUs;
