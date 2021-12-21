import React from 'react'
import { ActivityIndicator, Dimensions, View, FlatList, Text, ScrollView } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWith } = Dimensions.get('window');

const HomeScreen = () => {

    const { cartelera, isLoading } = useMovies();
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
                        data={cartelera}
                        renderItem={({ item }: any) => (

                            <MoviePoster movie={item}


                            />

                        )}
                        sliderWidth={windowWith}
                        itemWidth={300}

                    />
                </View>

                <View style={{ height: 260 }}>

                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>

                    <FlatList
                        data={cartelera}
                        renderItem={({ item }: any) => <MoviePoster width={120} height={200} movie={item} />}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>
                <View style={{ height: 240 }}>

<Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>

<FlatList
    data={cartelera}
    renderItem={({ item }: any) => <MoviePoster width={120} height={170} movie={item} />}
    keyExtractor={(item) => item.id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}

/>

</View>

            </View>
        </ScrollView>
    )
}

export default HomeScreen
