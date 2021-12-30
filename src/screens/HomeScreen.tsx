import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, View, FlatList, Text, ScrollView } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';

import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColor } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: windowWith } = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading, } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext)

    const getPosterColor = async (index: number) => {
        const movie = nowPlaying[index];
        const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const [primary = 'grren', secondary = 'blue'] = await getImageColor(url)
    
        setMainColors({ primary, secondary })
    }

    useEffect(() => {
       
        if(nowPlaying.length > 0){
            getPosterColor(0)
        }

        
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color='#5584AC' size={100} />
            </View>

        )
    }

    return (

        <GradientBackground>

            <ScrollView >
                <View style={{ marginTop: top + 20 }} >

                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => (<MoviePoster movie={item} />)}
                            sliderWidth={windowWith}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColor(index)}

                        />
                    </View>
                    <HorizontalSlider title='Populares' movies={popular} />
                    <HorizontalSlider title='Mas valoradas' movies={topRated} />
                    <HorizontalSlider title='Promimamente' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen




