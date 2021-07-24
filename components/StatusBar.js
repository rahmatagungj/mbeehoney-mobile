import React from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";

export default function ({
  backgroundColor = "#000000",
  barStyle = "dark-content",
  hidden = false,
}) {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return (
    isFocused && (
      <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
          hidden={hidden}
          animated={false}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    )
  );
}
