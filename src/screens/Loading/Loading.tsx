import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "./style";
import { isNewUser } from "../../services/utils";

export const LoadingScreen = (props: any) => {
  const newUserHelper = async () => {
    const returnedNewUser = await isNewUser();
    if (returnedNewUser) {
      props.navigation.navigate("OnBoarding");
    } else {
      props.navigation.navigate("Authorized");
    }
  };
  useEffect(() => {
    newUserHelper();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/imgs/logo.png")}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};
