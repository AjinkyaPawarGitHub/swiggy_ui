import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FoodTypes = () => {
  const types = [
    {
      id: "0",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
      name: "Biryani",
    },
    {
      id: "1",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
      name: "Dessert",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
      name: "Burger",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
      name: "Salad",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
      name: "Sandwiches",
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
      name: "Biriyani",
    },
    {
      id: "6",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
      name: "Dessert",
    },
    {
      id: "7",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
      name: "Burger",
    },
    {
      id: "8",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
      name: "Salad",
    },
    {
      id: "9",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
      name: "Sandwiches",
    },
  ];

  return (
    <View>
      <FlatList
        data={types}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
            <Text style={{ marginTop: 6, textAlign: "center" }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});
