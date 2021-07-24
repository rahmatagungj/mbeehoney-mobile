import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Banner from "../components/Banner";
import StatusBar from "../components/StatusBar";
import { Button } from "../components/Button";
import Label from "../components/Label";

const bannerData = [
  {
    title: "Madu Asli dan Murni harga Ekonomis",
    url: require("../assets/banner1.png"),
    description: "bebas",
    id: 1,
  },
  {
    title:
      "Diskon besar dengan bergabung menjadi Distributor, Agen, Reseller Madu",
    url: require("../assets/banner2.png"),
    description: "bebas",
    id: 2,
  },
];

const hotProductData = {
  title: "Madu Asli dan Murni harga Ekonomis",
  url: require("../assets/product2.png"),
  description: "bebas",
  id: 1,
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor="#f16601" barStyle="light-content" />
      <Header>
        <WithPadding>
          <StoreTite>MBEE HONEY</StoreTite>
        </WithPadding>
        <Banner data={bannerData} />
      </Header>
      <HotProduct>
        <HeaderHotProduct>
          <TitleHotProduct>Produk Unggulan</TitleHotProduct>
        </HeaderHotProduct>
        <ContainerHotProduct>
          <ImageHotProduct source={hotProductData.url} />
          <WithFlex>
            <TitleProduct>Madu Cair</TitleProduct>
            <Label title="200 ml" />
            <DescriptionProduct>
              Madu dari Lebah Afis Melifera, murni tanpa campuran, tanpa proses
              Pasteurisasi atau pengolahan.
            </DescriptionProduct>
            <ButtonBuy title="Beli" />
          </WithFlex>
        </ContainerHotProduct>
      </HotProduct>
    </SafeAreaView>
  );
};

const Header = styled.View`
  background: #f16601;
`;

const StoreTite = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const WithPadding = styled.View`
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const HotProduct = styled.View`
  padding: 5px;
  padding-top: 15px;
`;

const HeaderHotProduct = styled.View`
  flex-direction: row;
`;

const TitleHotProduct = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

const ContainerHotProduct = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ImageHotProduct = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: cover;
`;

const WithFlex = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

const ButtonBuy = styled(Button)`
  background: #f9b208;
  border-radius: 5px;
  color: white;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

const TitleProduct = styled.Text`
  font-size: 15px;
`;

const DescriptionProduct = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 11px;
  width: 185px;
`;

export default HomeScreen;
