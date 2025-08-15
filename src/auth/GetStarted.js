import React, { useEffect } from "react";
import { View, Image, TouchableOpacity, Text, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#45C7CF", // Primary color
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        position: "relative",
      }}
    >
      {/* Logo */}
      <Image
        source={require("./../assets/images/nikitaLogo.jpeg")}
        style={{
          width: width * 0.6,
          height: height * 0.3,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      {/* Skip Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 50,
          right: 0,
          zIndex: 1,

          backgroundColor: "#45C7CF",
          paddingVertical: 8,
          paddingHorizontal: 36,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            color: "#111111",
            fontSize: 22,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SplashPage")}
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          zIndex: 1,

          backgroundColor: "#45C7CF",
          paddingVertical: 4,
          paddingHorizontal: 16,
          borderRadius: 20,

        }}
      >
        <Text
          style={{
            color: "#111111",
            fontSize: 26,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
