import React from "react";
import { Image, Text, View } from "react-native";
import { ICharacter } from "../../models";
import { Card } from "../UI";
import { styles } from "./style";
import Highlighter from "react-native-highlight-words";
import { useNavigation } from "@react-navigation/native";

export const CharacterCard = ({
  item,
  searchCard,
  searchWords = "",
}: {
  item: ICharacter;
  searchCard?: boolean;
  searchWords?: string;
}) => {
  const navigation = useNavigation();

  return (
    <Card
      style={searchCard ? styles.searchCard : undefined}
      onPress={() => navigation.navigate("Details", { character: item })}
    >
      {searchCard ? (
        <View style={styles.searchCardCont}>
          <Image
            source={
              item.thumbnail?.path
                ? {
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }
                : require("../../assets/logo.png")
            }
            style={styles.searchCardImg}
          />
          <View style={styles.searchTextCont}>
            <Text style={styles.searchTitle}>
              <Highlighter
                highlightStyle={{ backgroundColor: "#8e2025" }}
                searchWords={[searchWords]}
                textToHighlight={item?.name}
              />
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.cardCont}>
          <Image
            source={
              item.thumbnail?.path
                ? {
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }
                : require("../../assets/logo.png")
            }
            style={styles.cardImg}
          />
          <View style={styles.textCont}>
            <Text style={styles.title}>{item?.name}</Text>
          </View>
        </View>
      )}
    </Card>
  );
};
