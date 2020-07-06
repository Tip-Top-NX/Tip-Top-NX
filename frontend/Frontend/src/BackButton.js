import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Platform } from "react-native";
const CustomBack = () => {
  const { colors } = useTheme();

  return (
    <MaterialIcons
      name="arrow-back"
      size={28}
      // color={colors.primary}
      color="#C2185B"
      style={{
        ...Platform.select({
          ios: {
            paddingLeft: 10,
          },
          android: {
            paddingLeft: 2,
          },
        }),
      }}
    />
  );
};

export default CustomBack;
