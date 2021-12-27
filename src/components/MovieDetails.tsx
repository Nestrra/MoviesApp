import React from 'react'
import { FlatList, Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';

import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';


interface Props {
    movieFull: MovieFull;
    cast: Cast[];

}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        size={16}
                        color='grey'
                        name='star-outline'
                    />
                    <Text style={{ marginLeft: 5 }}>{movieFull.vote_average}</Text>
                    {
                        <Text style={{ marginLeft: 5 }}>- {movieFull.genres.map((res) => res.name).join(',  ')}</Text>
                    }
                </View>
                <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold', color: 'black' }} >Historia</Text>
                <Text style={{ fontSize: 16 }} >
                    {movieFull.overview}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 20, fontWeight: 'bold', color: 'black' }} >Presupuesto</Text>
                <Text style={{ fontSize:18}}>{currencyFormatter.format(movieFull.budget, {code:'USD'} )}</Text>
            </View>
            <View style={{ marginTop:10, marginBottom:30}}>
            <Text style={{ marginHorizontal:20, fontSize: 23, marginTop: 20, fontWeight: 'bold', color: 'black' }} >Reparto</Text>
                {/*  */}
                <FlatList
                    data={cast}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=><CastItem
                    actor={item}
                    
                />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10, height:70}}
                />
            </View>
            
        </>
    )
}
