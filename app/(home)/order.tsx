import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const order = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [tip, setTip] = useState(0);
  const time = moment().format("LT");
  const mapView = useRef<MapView>(null);
  const [coordinates] = useState([
    { latitude: 12.9716, longitude: 77.5946 },
    { latitude: 13.0451, longitude: 77.6269 },
  ]);

  useEffect(() => {
    if (mapView.current) {
      mapView.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
      });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          onPress={() => router.back()}
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backIcon}
        />
        <Text style={styles.headerTitle}>{params?.name}</Text>
      </View>
      <View style={styles.deliveryInfo}>
        <View>
          <Text style={styles.deliveryText}>Delivery in 25 mins</Text>
          <Text style={styles.deliveryText}>Order placed at {time}</Text>
        </View>
        <Text style={styles.helpText}>HELP</Text>
      </View>
      <MapView
  ref={mapView}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={styles.map}
>
  <Marker coordinate={coordinates[0]} />
  <Marker coordinate={coordinates[1]} />
  <Polyline coordinates={coordinates} strokeColor="black" lineDashPattern={[4]} strokeWidth={1} />
</MapView>

      <View style={styles.bottomSheet}>
        <Text style={styles.orderStatus}>{params?.name} has accepted your order</Text>
        <View style={styles.tipSection}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#fc8019" />
          <View style={styles.tipContainer}>
            <Text style={styles.tipPrompt}>Tip your hunger Saviour</Text>
            <View style={styles.tipButtons}>
              {[30, 50, 70].map((amount, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setTip(amount)}
                  style={[
                    styles.tipButton,
                    amount === 50 && styles.mostTippedButton,
                  ]}
                >
                  <Text style={styles.tipButtonText}>₹{amount}</Text>
                  {amount === 50 && <Text style={styles.mostTippedText}>Most Tipped</Text>}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {tip > 0 && (
          <View style={styles.tipConfirmation}>
            <Text style={styles.tipMessage}>
              Please pay ₹{tip} to your delivery agent at the time of delivery.
            </Text>
            <TouchableOpacity onPress={() => setTip(0)} style={styles.cancelTipButton}>
              <Text style={styles.cancelTipText}>(Cancel)</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default order;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#1e1e2e" 
  },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 16 
  },
  backIcon: { 
    marginRight: 8, 
    color: "#FFFFFF" 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: "600", 
    color: "#FFFFFF" 
  },
  deliveryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fd5c63",
    padding: 16,
    borderRadius: 8,
    margin: 8,
  },
  deliveryText: { 
    color: "#FFFFFF", 
    fontSize: 15, 
    fontWeight: "600" 
  },
  helpText: { 
    color: "#FFFFFF", 
    fontSize: 15, 
    fontWeight: "600" 
  },
  map: { 
    width: "100%", 
    height: 400, 
    borderRadius: 12, 
    overflow: "hidden", 
    marginVertical: 8 
  },
  bottomSheet: {
    backgroundColor: "#2e2e3e",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  orderStatus: { 
    fontSize: 17, 
    fontWeight: "500", 
    textAlign: "center", 
    color: "#FFFFFF", 
    marginVertical: 8 
  },
  tipSection: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 16 
  },
  tipContainer: { 
    marginLeft: 12 
  },
  tipPrompt: { 
    fontSize: 18, 
    fontWeight: "500", 
    color: "#FFFFFF" 
  },
  tipButtons: { 
    flexDirection: "row", 
    marginTop: 12 
  },
  tipButton: {
    backgroundColor: "#3e3e4e",
    borderRadius: 8,
    marginHorizontal: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  tipButtonText: { 
    color: "#00d4ff", 
    fontWeight: "600" 
  },
  mostTippedButton: { 
    backgroundColor: "#44334f", 
    borderColor: "#fd5c63", 
    borderWidth: 1 
  },
  mostTippedText: { 
    color: "#fd5c63", 
    fontSize: 12, 
    marginTop: 4 
  },
  tipConfirmation: { 
    marginTop: 16, 
    padding: 16, 
    backgroundColor: "#3a3a4a", 
    borderRadius: 8 
  },
  tipMessage: { 
    color: "#fd5c63", 
    fontWeight: "600", 
    fontSize: 14 
  },
  cancelTipButton: { 
    marginTop: 8 
  },
  cancelTipText: { 
    color: "#FF6E6E", 
    fontSize: 14, 
    fontWeight: "700" 
  },
});