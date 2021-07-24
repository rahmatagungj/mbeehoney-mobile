import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, FlatList, Animated } from "react-native";
import Slide from "./Slide";
import styled from "styled-components/native";

const { width, heigth } = Dimensions.get("window");
let flatList;

function infiniteScroll(dataList, cleaner) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  let time = setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
    try {
      this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
    } catch (e) {
      clearInterval(time);
    }
  }, 4000);

  if (cleaner) {
    clearInterval(time);
  }
}

const Banner = ({ data }) => {
  const scrollX = new Animated.Value(0);
  const [dataList, setDataList] = useState(data);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList, false);
    return () => {
      infiniteScroll(dataList, true);
    };
  }, []);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(flatList) => {
            try {
              this.flatList = flatList;
            } catch (e) {}
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Slide item={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
        <DotView>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 5,
                  width: 10,
                  backgroundColor: "#FFB74E",
                  margin: 4,
                  borderRadius: 15,
                }}
              />
            );
          })}
        </DotView>
      </View>
    );
  }

  return null;
};

const DotView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

export default Banner;
