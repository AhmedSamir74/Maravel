import React from 'react';
import renderer from 'react-test-renderer';
import { MovieCard } from '../src/components';

beforeAll(() => {
    jest.mock('@react-native-community/async-storage');
});

test('renders correctly', () => {
    let movie = {
        adult: false,
        backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
        genre_ids: [14, 28, 12],
        id: 464052,
        original_language: 'en',
        original_title: 'Wonder Woman 1984',
        overview:
            'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        popularity: 3663.168,
        poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
        release_date: '2020-12-16',
        title: 'Wonder Woman 1984',
        video: false,
        vote_average: 7.2,
        vote_count: 2727,
    };
    const tree = renderer.create(<MovieCard item={movie} />).toJSON();
    expect(tree).toMatchSnapshot();
});
