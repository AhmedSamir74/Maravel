import React, { Component } from "react";
import {
  View,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { styles } from "./style";
import CharacterController from "../../services/utils/CharacterController";
import { theme } from "../../constants";
import { ICharacter } from "../../models";
import { strings } from "../../localization/i18n";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { EntityCard } from "../../components";

const LoaderComp = () => {
  return (
    <View style={styles.loaderCont}>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </View>
  );
};

const EmptyList = () => {
  return (
    <View style={styles.listEmptyCont}>
      <Text style={styles.sectionDesc}>{strings("emptyList")}</Text>
    </View>
  );
};

class DetailsScreen extends Component<any> {
  characterController: CharacterController;
  handleInputThrottled: any;
  scrollYAnimation: Animated.Value;
  state: {
    requestLoading: boolean;
    character: ICharacter | null;
  };
  constructor(props: any) {
    super(props);
    this.characterController = new CharacterController();
    this.state = {
      requestLoading: true,
      character: null,
    };
    this.scrollYAnimation = new Animated.Value(-140);
  }

  componentDidMount() {
    const { character } = this.props.route.params;
    this.setState({ character, requestLoading: false });
  }

  render() {
    const { requestLoading, character } = this.state;
    return (
      <View style={styles.layout}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => this.props.navigation.goBack()}
          activeOpacity={0.6}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            color={theme.colors.white}
            size={40}
          />
        </TouchableOpacity>
        <Animated.View
          style={[
            styles.transformedImgCont,
            {
              top: this.scrollYAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [-140, 0],
                extrapolate: "clamp",
              }),
            },
          ]}
        >
          <Image
            source={{
              uri:
                character?.thumbnail?.path +
                "." +
                character?.thumbnail?.extension,
            }}
            style={styles.transformedCharacterImg}
          />
          <View style={styles.transformedTitleCont}>
            <Text style={styles.transformedTitle}>{character?.name}</Text>
          </View>
        </Animated.View>
        {requestLoading ? (
          <LoaderComp />
        ) : (
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.scrollYAnimation,
                    },
                  },
                },
              ],
              { useNativeDriver: false }
            )}
          >
            <View style={styles.imgCont}>
              <Image
                source={{
                  uri:
                    character?.thumbnail?.path +
                    "." +
                    character?.thumbnail?.extension,
                }}
                style={styles.characterImg}
              />
            </View>
            <View style={styles.infoCont}>
              {/* TITLE */}
              <Text style={styles.characterName}>{character?.name}</Text>

              {/* DESCRIPTION */}
              {character?.description ? (
                <View style={styles.sectionCont}>
                  <Text style={styles.sectionTitle}>
                    {strings("description")}
                  </Text>
                  <Text style={styles.sectionDesc}>
                    {character?.description}
                  </Text>
                </View>
              ) : null}

              {/* COMICS */}
              <View style={styles.sectionCont}>
                <Text style={styles.sectionTitle}>{strings("comics")}</Text>
                <FlatList
                  horizontal
                  data={character?.comics?.items}
                  renderItem={({ item }) => (
                    <EntityCard type="comics" item={item} />
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={() => <EmptyList />}
                />
              </View>

              {/* EVENTS */}
              <View style={styles.sectionCont}>
                <Text style={styles.sectionTitle}>{strings("events")}</Text>
                <FlatList
                  horizontal
                  data={character?.events?.items}
                  renderItem={({ item }) => (
                    <EntityCard type="events" item={item} />
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={() => <EmptyList />}
                />
              </View>

              {/* SERIES */}
              <View style={styles.sectionCont}>
                <Text style={styles.sectionTitle}>{strings("series")}</Text>
                <FlatList
                  horizontal
                  data={character?.series?.items}
                  renderItem={({ item }) => (
                    <EntityCard type="series" item={item} />
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={() => <EmptyList />}
                />
              </View>

              {/* STORIES */}
              <View style={styles.sectionCont}>
                <Text style={styles.sectionTitle}>{strings("stories")}</Text>
                <FlatList
                  horizontal
                  data={character?.stories?.items}
                  renderItem={({ item }) => (
                    <EntityCard type="stories" item={item} />
                  )}
                  keyExtractor={(item, index) => `${index}`}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={() => <EmptyList />}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

export default DetailsScreen;
