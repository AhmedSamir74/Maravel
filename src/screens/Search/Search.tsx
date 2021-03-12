import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./style";
import { showToast } from "../../services/utils/helpers";
import CharacterController from "../../services/utils/CharacterController";
import { theme } from "../../constants";
import { connect } from "react-redux";
import { ICharacter, IState } from "../../models";
import { CharacterCard } from "../../components";
import { throttle } from "lodash";
import { strings } from "../../localization/i18n";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, { Easing } from "react-native-reanimated";

const EmptyList = () => {
  return (
    <View style={styles.listEmptyCont}>
      <Text style={styles.sectionDesc}>{strings("noResults")}</Text>
    </View>
  );
};
class SearchScreen extends Component<any> {
  characterController: CharacterController;
  handleInputThrottled: any;
  constructor(props: any) {
    super(props);
    this.characterController = new CharacterController();
    this.handleInputThrottled = throttle(this.getCharacters, 1000).bind(this);
  }

  state = {
    searchText: "",
    characters: [],
    refreshing: false,
    requestLoading: true,
    limit: 10,
    offset: 0,
    total: 0,
    clearBtnOpacity: new Animated.Value(0),
  };

  componentDidMount() {
    this.getCharacters();
  }

  handleOpacity(show: boolean) {
    Animated.timing(this.state.clearBtnOpacity, {
      duration: 200,
      toValue: show ? 1 : 0,
      easing: Easing.linear,
    }).start();
  }
  handleInput(searchText: string) {
    this.setState({ searchText }, () => this.handleInputThrottled());
  }

  async getCharacters(offset = 0) {
    if (!this.state.requestLoading) {
      this.setState({ refreshing: true });
    }
    const {
      status,
      data,
      newOffset,
      total,
    } = await this.characterController.getCharacters(
      offset,
      this.state.searchText
    );
    if (status) {
      this.setState((prevState: IState, props) => ({
        characters: !offset ? data : [...prevState.characters, ...data],
        requestLoading: false,
        refreshing: false,
        offset: newOffset,
        total,
      }));
    } else {
      showToast(data);
    }
  }

  render() {
    return (
      <View style={styles.layout}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.background}
        />

        <View style={styles.listCont}>
          <View style={styles.searchCont}>
            <View style={styles.headerCont}>
              <MaterialCommunityIcons
                name="magnify"
                color={theme.colors.white}
                size={25}
              />
              <TextInput
                placeholder={strings("search")}
                placeholderTextColor={theme.colors.white}
                onChangeText={this.handleInput.bind(this)}
                style={styles.searchInput}
                value={this.state.searchText}
                onFocus={() => {
                  this.handleOpacity(true);
                }}
                onBlur={() => {
                  this.handleOpacity(false);
                }}
              />
              <Animated.View style={{ opacity: this.state.clearBtnOpacity }}>
                <MaterialCommunityIcons
                  name="close"
                  color={theme.colors.white}
                  size={20}
                  onPress={() => this.handleInput("")}
                />
              </Animated.View>
            </View>

            <TouchableOpacity
              style={styles.cancelTextCont}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.cancelText}>{strings("cancel")}</Text>
            </TouchableOpacity>
          </View>
          {this.state.requestLoading && (
            <View style={styles.activityIndicatorCont}>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          )}
          <FlatList
            refreshing={this.state.refreshing}
            onRefresh={() => this.getCharacters()}
            data={this.state.characters}
            renderItem={({ item }: { item: ICharacter }) => (
              <CharacterCard
                item={item}
                searchCard
                searchWords={this.state.searchText}
              />
            )}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              this.state.characters.length > this.state.limit &&
                this.getCharacters(this.state.offset + this.state.limit);
            }}
            onEndReachedThreshold={0.01}
            keyExtractor={(item) => `${item.id}`}
            ListEmptyComponent={() =>
              !this.state.requestLoading ? <EmptyList /> : null
            }
            contentContainerStyle={styles.listCont}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  myMovies: state.movies.data,
});

export default connect(mapStateToProps)(SearchScreen);
