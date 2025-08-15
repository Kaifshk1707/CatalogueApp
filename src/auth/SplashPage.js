import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "Handcrafting brilliance since 1998",
    description: "",
    image: require("./../assets/images/nikitaLogo.jpeg"),
  },
  {
    id: 2,
    title: "Trusted Craftsmanship Since 1998",
    description:
      "Specialized in Gold, Diamond & Polki jewellery, Mangalsutra — crafted with care for your special moments",
    image: require("./../assets/images/nikitaLogo.jpeg"),
  },
  {
    id: 3,
    title: "Jewelry Tailored for Every Occasion",
    description:
      "From weddings and proposals to anniversaries and devotional events",
    image: require("./../assets/images/nikitaLogo.jpeg"),
  },
];

export default function SplashScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("Login");
    }
  };

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
      {/* Logo */}
      <Image
        source={slides[currentIndex].image}
        style={{
          width: width * 0.6,
          height: height * 0.3,
          marginBottom: -40,
        }}
        resizeMode="contain"
      />

      {/* Text content */}
      <View style={{ padding: 20, borderRadius: 10 }}>
        <Text
          style={{
            fontSize: currentIndex === 0 ? 30 : 26,
            fontWeight: currentIndex === 0 ? "600" : "bold",
            color: "#111111",
            textAlign: "center",
            marginBottom: slides[currentIndex].description ? 10 : 0,
            lineHeight: 30,
          }}
        >
          {slides[currentIndex].title}
        </Text>
        {slides[currentIndex].description ? (
          <Text
            style={{
              fontSize: 22,
              color: "#111111",
              textAlign: "center",
              lineHeight: 22,
            }}
          >
            {slides[currentIndex].description}
          </Text>
        ) : null}
      </View>

      {/* Pagination dots */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              height: 10,
              width: currentIndex === index ? 20 : 10,
              borderRadius: 5,
              backgroundColor:
                currentIndex === index ? "#111111" : "#ffffffaa",
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity
        onPress={handleNext}
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
          {currentIndex === slides.length - 1 ? "Finish" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
