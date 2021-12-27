
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie;
    height?:number;
    width?:number;
}


export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {


    const navigation = useNavigation();
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


    return (
        <TouchableOpacity
        onPress={ () => navigation.navigate('Detail' as never, movie as never)}
        activeOpacity={0.85}    
        style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:5,

        }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    container: {
        flex: 1,
        borderRadius: 22,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.6,
shadowRadius: 3.84,

elevation: 12,
    }
});