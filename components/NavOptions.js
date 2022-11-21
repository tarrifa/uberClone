import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
//prueba git
const data = [
  {
    id: "123",
    title: "Viaje",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Envios",
    image: "https://links.papareact.com/28w",
    screen: "Eats",
  },
  {
    id: "789",
    title: "Super",
    image: "https://links.papareact.com/3pn",
    screen: "SuperScreen",
  },
  {
    id: "012",
    title: "PorTiempo",
    image: "https://links.papareact.com/3pn",
    screen: "TimeScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disable={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
