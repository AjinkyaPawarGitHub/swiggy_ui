import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity, // Changed from Pressable
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import MenuItem from "../components/MenuItem";
import hotels from "../data/hotels";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={{ marginTop: "10%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor: "#c0c0c0",
          borderRadius: 7,
        }}
      >
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Search for Restaurant item or more"
        />
        <Icon
          name="search"
          size={24}
          color="#E52B50"
          style={{ marginLeft: "2%" }}
        />
      </View>
      <Carousel />
      <FoodTypes />
      <QuickFood />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity // Changed from Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
            justifyContent: "center",
          }}
        >
          <Text style={{ marginRight: 20 }}>Filter</Text>
          <Icon name="filter" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity // Changed from Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width: 120,
          }}
        >
          <Text>Sort By Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity // Changed from Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort By Price</Text>
        </TouchableOpacity>
      </View>
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
