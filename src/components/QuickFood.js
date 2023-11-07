import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import quickfood from "../data/quickfood";
import Icon from "react-native-vector-icons/MaterialIcons";

const QuickFood = () => {
  const data = quickfood;

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={{ margin: 10 }}>
      <ImageBackground
        imageStyle={{ borderRadius: 12 }}
        style={{ aspectRatio: 5 / 6, height: 170 }}
        source={{ uri: item.image }}
      >
        <Text
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            fontSize: 27,
            fontWeight: "900",
            color: "black",
          }}
        >
          {item.offer} OFF
        </Text>
      </ImageBackground>
      <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
        {item.name}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
      >
        <Icon name="stars" size={24} color="green" />
        <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
          {item.rating}
        </Text>
        <Text style={{ marginLeft: 3 }}>•</Text>
        <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
          {item.time}mins
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
