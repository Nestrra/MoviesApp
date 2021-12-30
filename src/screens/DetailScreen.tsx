import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootstackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;


interface Props extends StackScreenProps<RootstackParams, 'Detail'> { }



const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`


    const { loading, cast, movieFull } = useMovieDetails(movie.id)


    return (

        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{ uri: url }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle} >{movie.original_title}</Text>
                <Text style={styles.Title} >{movie.title}</Text>
            </View>

            {
                loading ? <ActivityIndicator size={30} color='grey' style={{ marginTop: 20 }} /> : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            <Icon
                name='arrow-back-outline'
                size={80}
                color='red'
                style={styles.backButton}
            />

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,

        elevation: 12,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.6,
    },
    Title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButton:{
        position:'absolute',
        zIndex:999,
        elevation:9,
        top:30,
        left:5,
    }
});



export default DetailScreen
