import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Image, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

const images = [
    require("./../assets/images/Img1.jpg"),
    require("./../assets/images/Img2.jpg"),
    require("./../assets/images/Img3.jpg"),
    require("./../assets/images/Img4.jpg"),
    require("./../assets/images/Img5.jpg"),
];

const BannerComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            let nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }, 3000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <View style={{ height: 200,  margin: 5 }}>
            <FlatList
                data={images}
                ref={flatListRef}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item}
                        style={{ width: width, height: 200 }}
                        resizeMode="contain"
                    />
                )}
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(
                        event.nativeEvent.contentOffset.x / width
                    );
                    setCurrentIndex(index);
                }}
            />
        </View>
    );
};

export default BannerComponent;
