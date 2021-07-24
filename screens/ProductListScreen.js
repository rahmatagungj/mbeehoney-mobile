import React from "react";
import styled from "styled-components/native";
import { Button } from "../components/Button";
import Label from "../components/Label";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

const dataProduct = [
  {
    title: "Madu Cair",
    image: require("../assets/product2.png"),
    price: "Rp. 150.000.0",
    spec: "200 ml",
    link: "https://api.whatsapp.com/send?phone=6282321580452&text=Hai%20Kak%20Hani,%20Saya%20tertarik%20untuk%20Order%20Madu%20Cair",
  },
];

const ProductListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <TitlePage>Daftar Produk</TitlePage>
        <ContainerListProduct>
          {dataProduct.map((product, idx) => (
            <ContainerProduct
              style={{
                shadowColor: "#2b2b2b",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 2,
              }}
              key={idx}
            >
              <ImageProduct source={product.image} />
              <WithFlex>
                <TitleProduct>{product.title}</TitleProduct>
                <Label title={product.spec} />
                <FlexRow>
                  <PriceProduct>{product.price}</PriceProduct>
                  <ButtonBuy
                    title="Beli"
                    onPress={() => Linking.openURL(product.link)}
                  />
                </FlexRow>
              </WithFlex>
            </ContainerProduct>
          ))}
        </ContainerListProduct>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  padding: 5px;
`;

const TitlePage = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const ContainerListProduct = styled.View`
  padding-horizontal: 10px;
`;

const TitleHotProduct = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
`;

const ContainerProduct = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  background: white;
  padding: 5px;
  border-radius: 10px;
`;

const FlexRow = styled.View`
  align-items: center;
  width: 210px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
`;

const ImageProduct = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: cover;
  border-radius: 5px;
`;

const WithFlex = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

const ButtonBuy = styled(Button)`
  background: #f9b208;
  border-radius: 5px;
  color: white;
`;

const TitleProduct = styled.Text`
  font-size: 15px;
`;

const PriceProduct = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
`;

export default ProductListScreen;
