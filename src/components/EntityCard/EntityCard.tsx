import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import { theme } from "../../constants";
import { IComicSummary } from "../../models";
import CharacterController from "../../services/utils/CharacterController";
import { styles } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const EntityCard = ({
  item,
  type,
}: {
  item: IComicSummary;
  type: "comics" | "series" | "stories" | "events";
}) => {
  const [data, setData] = useState<any>(null);
  const [loader, setLoader] = useState<undefined | boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    let characterController = new CharacterController();
    if (item.resourceURI) {
      let id = item.resourceURI.split("/").pop();
      characterController.getComicDetails(type, id).then((response) => {
        if (response.status) {
          setData(response.data);
        } else {
          setLoader(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

  return (
    <View style={styles.card}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalCont}>
          <MaterialCommunityIcons
            name="close"
            color={theme.colors.white}
            size={40}
            onPress={() => {
              setShowModal(false);
            }}
            style={styles.closeIcon}
          />
          <View style={styles.centeredView}>
            <Image
              source={{
                uri: data?.thumbnail?.path
                  ? `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`
                  : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
              }}
              style={styles.modalImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setShowModal(true)}>
        {loader ? (
          <View style={[styles.cardImg, { justifyContent: "center" }]}>
            <ActivityIndicator size="small" color={theme.colors.primary} />
          </View>
        ) : (
          <Image
            source={{
              uri: data?.thumbnail?.path
                ? `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`
                : "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
            }}
            style={styles.cardImg}
          />
        )}
        <View style={styles.textCont}>
          <Text style={styles.title} numberOfLines={2}>
            {item?.name}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
