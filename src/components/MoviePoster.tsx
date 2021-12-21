import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'


interface Props {
    movie: Movie;
    height?:number;
    width?:number;
}


export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    console.log(movie.poster_path)
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{
            width,
            height,
            marginHorizontal:8,

        }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            </View>

        </View>
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