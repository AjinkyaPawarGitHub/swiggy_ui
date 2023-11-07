import React from "react";
import { View, FlatList, StyleSheet, Image, Dimensions } from "react-native";

const Carousel = () => {
  const images = [
    {
      id: 1,
      url: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width: 340, height: 200, borderRadius: 10 }}
          />
        )}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
