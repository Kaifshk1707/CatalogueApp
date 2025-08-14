import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
const SplashTwo = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#45C7CF",
      }}
    >
      {/* Logo / Icon */}
      <Image
        source={require("./../assets/images/nikitaLogo.jpeg")}
        style={{
          width: width * 0.6,
          height: height * 0.3,
          marginBottom: -40,
        }}
        resizeMode="contain"
      />

      {/* Tagline */}
      <View
        style={{
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#111111",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Trusted Craftsmanship Since 1998
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#111111",
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Specialized in Gold, Diamond & Polki jewellery, Mangalsutra — crafted
          with care for your special moments
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("SplashThree")}
        style={{
          position: "absolute",
          bottom: 40,
          right: 20,
          zIndex: 1,
          //   borderWidth: 1,
          //   borderColor: "#111111",
          backgroundColor: "#45C7CF",
          paddingVertical: 4,
          paddingHorizontal: 16,
          borderRadius: 20,
          //   elevation: 3,
          //   shadowColor: "#000",
          //   shadowOpacity: 0.2,
          //   shadowRadius: 3,
          //   shadowOffset: { width: 0, height: 2 },
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

export default SplashTwo;
