import AsyncStorage from "@react-native-community/async-storage";
export const isNewUser = async () => {
  let isNew = true;
  await AsyncStorage.getItem("isNewUser", (_err, result: any) => {
    if (result !== null) {
      isNew = false;
    }
  });
  return isNew;
};

export const setNewUser = async (isNew: boolean) => {
  AsyncStorage.setItem("isNewUser", JSON.stringify(isNew));
};
