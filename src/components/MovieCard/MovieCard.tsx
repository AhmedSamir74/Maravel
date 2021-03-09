import React from 'react';
import { Image, Text, View } from 'react-native';
import { IMovie, IMyMovie } from '../../models';
import { Card } from '../UI';
import { styles } from './style';

export const MovieCard = ({ item, myMovie }: { item?: IMovie; myMovie?: IMyMovie }) => {
    return (
        <Card disabled>
            <View style={styles.cardCont}>
                <Image
                    source={
                        item
                            ? item.poster_path
                                ? {
                                      uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`,
                                  }
                                : require('../../assets/logo.png')
                            : myMovie
                            ? {
                                  uri: myMovie.img,
                              }
                            : require('../../assets/logo.png')
                    }
                    style={styles.cardImg}
                />
                <View style={styles.textCont}>
                    <Text style={styles.title}>{item?.original_title || myMovie?.title}</Text>
                    <Text style={styles.overview} numberOfLines={3}>
                        {item?.overview || myMovie?.overview}
                    </Text>
                    <Text style={styles.date}>
                        {item?.release_date || myMovie?.date?.toDateString()}
                    </Text>
                </View>
            </View>
        </Card>
    );
};
