import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type Property1leftType = {
  searchButtonText?: string;

  /** Style props */
  property1leftPosition?: string;
  property1leftTop?: number | string;
  property1leftLeft?: number | string;
  searchFontFamily?: string;
  searchColor?: string;

  /** Action props */
  onSearchBarPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1left = ({
  searchButtonText,
  property1leftPosition,
  property1leftTop,
  property1leftLeft,
  searchFontFamily,
  searchColor,
  onSearchBarPress,
}: Property1leftType) => {
  const property1leftStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1leftPosition),
      ...getStyleValue("top", property1leftTop),
      ...getStyleValue("left", property1leftLeft),
    };
  }, [property1leftPosition, property1leftTop, property1leftLeft]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", searchFontFamily),
      ...getStyleValue("color", searchColor),
    };
  }, [searchFontFamily, searchColor]);

  return (
    <View
      style={[styles.property1left, property1leftStyle]}
      onPress={onSearchBarPress}
    >
      <Image
        style={[styles.icoSearchIcon, styles.searchPosition]}
        contentFit="cover"
        source={require("../assets/icosearch.png")}
      />
      <Text style={[styles.search, styles.searchPosition, searchStyle]}>
        {searchButtonText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    top: "50%",
    marginTop: -8,
    position: "absolute",
  },
  icoSearchIcon: {
    left: 12,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  search: {
    left: 36,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 16,
    fontFamily: FontFamily.defaultRegularFootnote,
    color: Color.textDisable,
    textAlign: "left",
  },
  property1left: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_400,
    width: 335,
    height: 30,
    overflow: "hidden",
  },
});

export default Property1left;
