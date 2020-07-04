import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const CustomBack = () => {
  const { colors } = useTheme();

  return (
    <MaterialIcons
      name="arrow-back"
      size={28}
      color={colors.primary}
      style={{ marginLeft: 10 }}
    />
  );
};

export default CustomBack;
