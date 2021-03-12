import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  View,
} from "react-native";
import { styles } from "./style";
import { showToast } from "../../services/utils/helpers";
import CharacterController from "../../services/utils/CharacterController";
import { theme } from "../../constants";
import { ICharacter, IState } from "../../models";
import { CharacterCard } from "../../components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

class HomeScreen extends Component<any> {
  characterController: CharacterController;
  constructor(props: any) {
    super(props);
    this.characterController = new CharacterController();
  }

  state = {
    characters: [],
    refreshing: false,
    requestLoading: true,
    limit: 10,
    offset: 0,
    total: 0,
  };

  componentDidMount() {
    this.getCharacters(0);
  }

  async getCharacters(offset: number, reload?: boolean) {
    if (this.state.total > this.state.characters.length || !offset) {
      if (offset || reload) {
        this.setState({ refreshing: true });
      }
      const {
        status,
        data,
        newOffset,
        total,
      } = await this.characterController.getCharacters(offset);
      if (status) {
        this.setState((prevState: IState, props) => ({
          characters: reload ? data : [...prevState.characters, ...data],
          requestLoading: false,
          refreshing: false,
          offset: newOffset,
          total,
        }));
      } else {
        showToast(data);
      }
    }
  }

  render() {
    return (
      <View style={styles.layout}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <View style={styles.listCont}>
          <View style={styles.headerCont}>
            <View style={styles.headerLogoCont}>
              <Image
                source={require("../../assets/imgs/logo.png")}
                style={styles.headerLogo}
                resizeMode="contain"
              />
            </View>
            <MaterialCommunityIcons
              name="magnify"
              color={theme.colors.primary}
              size={30}
              onPress={() => this.props.navigation.navigate("Search")}
            />
          </View>
          {this.state.requestLoading && (
            <View style={styles.activityIndicatorCont}>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          )}
          <View style={styles.listCont}>
            <FlatList
              refreshing={this.state.refreshing}
              onRefresh={() => this.getCharacters(0, true)}
              data={this.state.characters}
              renderItem={({ item }: { item: ICharacter }) => (
                <CharacterCard item={item} />
              )}
              showsVerticalScrollIndicator={false}
              onEndReached={() =>
                this.getCharacters(this.state.offset + this.state.limit)
              }
              onEndReachedThreshold={0.01}
              ListFooterComponent={() =>
                this.state.characters.length ? (
                  <View style={styles.footerCont}>
                    <ActivityIndicator
                      size="small"
                      color={theme.colors.primary}
                    />
                  </View>
                ) : null
              }
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
