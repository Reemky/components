import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import Paginator from "../components/Paginator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const PaginatorScreen = () => {
  const { width } = Dimensions.get("window");

  const info = [
    {
      id: 1,
      name: "Reem Alyahya",
    },
    {
      id: 2,
      name: "Arwa Alsofiany",
    },
    {
      id: 3,
      name: "Rahaf Alodhami",
    },
  ];

  const InfoShow = ({ item }) => {
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", width: width }}
      >
        <Text style={styles.title}>
          ID: <Text style={styles.data}>{item.id}</Text>
        </Text>
        <Text style={styles.title}>
          Name: <Text style={styles.data}>{item.name}</Text>
        </Text>
      </View>
    );
  };

  const scrollX = useRef(new Animated.Value(0)).current;

  const ref = useRef();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "null", height: 150 }}>
        <FlatList
          ref={ref}
          data={info}
          horizontal
          renderItem={({ item }) => <InfoShow item={item} />}
          bounces={false}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
        />
      </View>
      <Paginator data={info} scrollX={scrollX}/>
    </View>
  );
};

export default PaginatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#3d3b3a",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 1,
  },
  data: {
    color: "#B24747",
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
