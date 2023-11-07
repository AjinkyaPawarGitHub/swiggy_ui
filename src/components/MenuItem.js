import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AIcon from "react-native-vector-icons/MaterialIcons";

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <ScrollView horizontal>
      <View style={{ margin: 10 }}>
        <Pressable style={{ flexDirection: "row" }}>
          <View>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={{ aspectRatio: 5 / 6, height: 170 }}
              source={{ uri: item.image }}
            >
              <TouchableOpacity>
                <Icon
                  style={{ position: "absolute", right: 10, left: 10 }}
                  name="heart"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <AIcon name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>
                {item.time}mins
              </Text>
            </View>

            <Text style={{ fontSize: 17, color: "gray", marginTop: 6 }}>
              {item.adress}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFB6C1",
                  width: 22,

                  height: 22,
                  borderRadius: 11,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ₹
                </Text>
              </View>

              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 4,
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {item.cost_for_two} for two
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <MIcon name="bike-fast" size={22} color="black" />
              <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
