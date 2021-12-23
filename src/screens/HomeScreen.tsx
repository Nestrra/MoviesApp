import React from 'react'
import { ActivityIndicator, Dimensions, View, FlatList, Text, ScrollView } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWith } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading,  } = useMovies();
    const { top } = useSafeAreaInsets();



    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='#5584AC' size={100} />
            </View>

        )
    }

    return (

        <ScrollView >
            <View style={{ marginTop: top + 20 }} >

                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => (

                            <MoviePoster movie={item}
                            />

                        )}
                        sliderWidth={windowWith}
                        itemWidth={300}

                    />
                </View>
                <HorizontalSlider title='Populares' movies={popular} />
                <HorizontalSlider title='Mas valoradas' movies={topRated} />
                <HorizontalSlider title='Promimamente' movies={upcoming} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen




