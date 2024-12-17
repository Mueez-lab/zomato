import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

interface HotelInfoProps {
  name: string | string[];
  aggregate_rating: string | number | string[] | undefined;
}


export default function HotetInfo(props:HotelInfoProps) {
  const {name,aggregate_rating} = props;
  return (
<View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.restaurantType}>North Indian • Fast Food • 160 for one</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{aggregate_rating}</Text>
              <Ionicons name="star" size={15} color="white" />
            </View>
            <Text style={styles.ratingCount}>3.2K Ratings</Text>
          </View>
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryText}>30 - 40 mins • 6 km | Bangalore</Text>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  restaurantInfo: {
    padding: 20,
    backgroundColor: "#2c2c3c", // Slightly lighter background for the restaurant info section
    marginBottom: 20,
    borderRadius: 15,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff", // Updated text color
  },
  restaurantType: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff", // Updated text color for better contrast
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7B731",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  ratingText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingCount: {
    fontSize: 14,
    fontWeight: "500",
    color: "#888", // Adjusted color to make it lighter
  },
  deliveryInfo: {
    backgroundColor: "#444", // Darker background for delivery info
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 15,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff", // Updated text color for better contrast
  },
})