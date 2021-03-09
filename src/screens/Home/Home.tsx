import React, { Component } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { styles } from './style';
import { showToast } from '../../services/utils/helpers';
import MoviesController from '../../services/utils/moviesController';
import { Card } from '../../components/UI';
import { theme } from '../../constants';
import { connect } from 'react-redux';
import { strings } from '../../localization/i18n';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { Button } from 'react-native-paper';
import { IMovie, IMyMovie, IState } from '../../models';
import { MovieCard } from '../../components';

const windowHeight = Dimensions.get('window').height;

class HomeScreen extends Component<any> {
    moviesController: MoviesController;
    constructor(props: any) {
        super(props);
        this.moviesController = new MoviesController();
    }

    state = {
        movies: [],
        refreshing: false,
        requestLoading: true,
        currentPage: 1,
        pages: 0,

        myMovies: [],
        myMovies_refreshing: false,
    };

    componentDidMount() {
        this.getMovies(1);
        this.getMyMovies(true);
    }

    async getMovies(pageNum: number, isRefresh?: boolean) {
        if (pageNum != 1 || isRefresh) {
            this.setState({ refreshing: true });
        }
        const { status, data, page, pages } = await this.moviesController.getMovies(pageNum);
        if (status) {
            this.setState((prevState: IState, props) => ({
                movies: isRefresh ? data : [...prevState.movies, ...data],
                requestLoading: false,
                refreshing: false,
                currentPage: page,
                pages,
            }));
        } else {
            showToast(data);
        }
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.myMovies !== prevProps.myMovies) {
            this.getMyMovies();
        }
    }

    getMyMovies(firstTime?: boolean) {
        // Pagination done by slicing the movies in redux by 5
        this.setState({ myMovies_refreshing: true });
        this.setState({ myMovies: this.props.myMovies });

        this.setState((prevState: IState, props) => ({
            myMovies: firstTime
                ? this.props.myMovies.slice(0, 5)
                : [
                      ...prevState.myMovies,
                      ...this.props.myMovies.slice(
                          prevState.myMovies.length,
                          prevState.myMovies.length + 5
                      ),
                  ],
            myMovies_refreshing: false,
        }));
    }

    renderMyMovie({ item }: { item: IMyMovie }) {
        let date = new Date(item.date);

        return (
            <Card disabled>
                <View style={styles.cardCont}>
                    <Image
                        source={
                            item.img
                                ? {
                                      uri: item.img,
                                  }
                                : require('../../assets/logo.png')
                        }
                        style={styles.cardImg}
                    />
                    <View style={styles.textCont}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.overview} numberOfLines={3}>
                                {item.overview}
                            </Text>
                        </View>
                        <Text style={styles.date}>{date.toDateString()}</Text>
                    </View>
                </View>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.layout}>
                <StatusBar barStyle="dark-content" backgroundColor={theme.colors.backdrop} />
                {this.state.requestLoading && (
                    <View style={styles.activityIndicatorCont}>
                        <ActivityIndicator size="large" color={theme.colors.primary} />
                    </View>
                )}
                <View style={styles.myListCont}>
                    <View style={styles.listCont}>
                        <Text style={styles.sectionTitle}>{strings('allMovies')}</Text>
                        <FlatList
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.getMovies(1, true)}
                            data={this.state.movies}
                            renderItem={({ item }: { item: IMovie }) => <MovieCard item={item} />}
                            showsVerticalScrollIndicator={false}
                            onEndReached={() => this.getMovies(this.state.currentPage + 1)}
                            onEndReachedThreshold={0.3}
                            ListFooterComponent={() => (
                                <View style={styles.footerCont}>
                                    <ActivityIndicator size="small" color={theme.colors.primary} />
                                </View>
                            )}
                            keyExtractor={(item) => `${item.id}`}
                        />
                    </View>
                    <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
                        componentType="FlatList"
                        snapPoints={[128, '80%', windowHeight - 200]}
                        initialSnapIndex={2}
                        renderHandle={() => (
                            <View style={styles.header}>
                                <View style={styles.panelHandle} />
                            </View>
                        )}
                        data={this.state.myMovies}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({ item }: { item: IMyMovie }) => <MovieCard myMovie={item} />}
                        contentContainerStyle={styles.contentContainerStyle}
                        ListEmptyComponent={
                            <View style={styles.noDataWarn}>
                                <Text style={styles.noDataTxt}>{strings('emptyList')}</Text>
                                <Button
                                    onPress={() => this.props.navigation.navigate('AddMovie')}
                                    mode="text"
                                    dark>
                                    {strings('addMovie')}
                                </Button>
                            </View>
                        }
                        style={styles.bottomSheetStyle}
                        ListFooterComponent={() => (
                            <View style={styles.footerCont}>
                                {this.state.myMovies_refreshing ? (
                                    <ActivityIndicator size="small" color={theme.colors.primary} />
                                ) : (
                                    this.state.myMovies.length != 0 && (
                                        <Button
                                            onPress={() =>
                                                this.props.navigation.navigate('AddMovie')
                                            }
                                            mode="text"
                                            dark>
                                            {strings('addMovie')}
                                        </Button>
                                    )
                                )}
                            </View>
                        )}
                        ListHeaderComponent={
                            <Text style={styles.sectionTitle}>{strings('myMovies')}</Text>
                        }
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => ({
    myMovies: state.movies.data,
});

export default connect(mapStateToProps)(HomeScreen);
