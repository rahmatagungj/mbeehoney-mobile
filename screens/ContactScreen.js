import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../components/StatusBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const { width, height } = Dimensions.get("window");

const ContactScreen = () => {
  const mapStandardStyle = [
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  const LATITUD_DELTA = 0.1022;
  const LONGITUDE_DELTA = LATITUD_DELTA + width / height;

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <MapViews
            widths={width}
            heights={height}
            customMapStyle={mapStandardStyle}
            showsUserLocation
            loadingEnabled
            initialRegion={{
              latitude: -6.975200176239014,
              longitude: 108.46880340576172,
              latitudeDelta: LATITUD_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker
              coordinate={{ latitude: -6.9752, longitude: 108.468803 }}
              title="Mbee Honey"
              pinColor={"#f16601"}
            />
          </MapViews>
          <Floating
            heights={height}
            widths={width}
            style={{
              shadowColor: "#3b3b3b",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
              shadowRadius: 1,
              elevation: 2,
            }}
          >
            <Avatar source={require("../assets/product2.png")} />
            <TitleContact>MBEE HONEY</TitleContact>
            <Content>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://mbeehoney.com")}
              >
                <WithFlex>
                  <MaterialCommunityIcons name="web" size={20} color="black" />
                  <WithMargin>
                    <Text>mbeehoney.com</Text>
                  </WithMargin>
                </WithFlex>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://api.whatsapp.com/send?phone=6282321580452&text=Hai%20Kak%20Hani,%20Saya%20tertarik%20untuk%20Order%20MBee%20Honey"
                  )
                }
              >
                <WithFlex>
                  <MaterialCommunityIcons
                    name="whatsapp"
                    size={20}
                    color="black"
                  />
                  <WithMargin>
                    <Text>082321580452</Text>
                  </WithMargin>
                </WithFlex>
              </TouchableOpacity>
            </Content>
          </Floating>
        </View>
      </SafeAreaView>
    </>
  );
};

const MapViews = styled(MapView)`
  width: ${(props) => props.widths}px;
  height: ${(props) => props.heights}px;
`;

const Floating = styled.View`
  position: absolute;
  top: ${(props) => props.heights - 250}px;
  z-index: 2;
  margin-left: 15px;
  margin-right: 15px;
  background: white;
  width: ${(props) => props.widths - 30}px;
  padding: 15px;
  border-radius: 15px;
`;

const TitleContact = styled.Text`
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  left: 115px;
  top: 20px;
`;

const Avatar = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  position: absolute;
  top: -40px;
  left: 10px;
  border-color: white;
  border-width: 5px;
`;

const Content = styled.View`
  margin-top: 50px;
`;

const WithFlex = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
`;

const WithMargin = styled.View`
  margin-left: 3px;
  margin-right: 3px;
`;

export default ContactScreen;
