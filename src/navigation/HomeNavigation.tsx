import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../constants';
import HomeScreen from '../screens/Home/Home';
import { AddMovieScreen } from '../screens/AddMovie';

const HomeFlow = createStackNavigator();

const HomeNavigation = () => (
    <HomeFlow.Navigator initialRouteName="Home">
        <HomeFlow.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => {
                return {
                    headerTitle: 'Home',
                    headerStyle: {
                        backgroundColor: theme.colors.backdrop,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name="plus"
                            color={theme.colors.primary}
                            size={26}
                            style={{ marginHorizontal: 10 }}
                            onPress={() => navigation.navigate('AddMovie')}
                        />
                    ),
                };
            }}
        />
        <HomeFlow.Screen
            name="AddMovie"
            component={AddMovieScreen}
            options={({ navigation }) => {
                return {
                    headerTitle: 'Add Movie',
                    headerStyle: {
                        backgroundColor: theme.colors.backdrop,
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                };
            }}
        />
    </HomeFlow.Navigator>
);

export default HomeNavigation;
