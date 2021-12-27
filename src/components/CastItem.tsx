import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'


interface Props {

    actor: Cast

}



export const CastItem = ({ actor }: Props) => {

    const url = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container}> 
        {
        actor.profile_path && <Image
        source={{ uri: url}}
        style={{width:50, height:50, borderRadius:10}}
    />
        }
            
            <View style={styles.actorInfo} >
                <Text style={{fontSize:16, fontWeight: 'bold', color: 'black'}} >{actor.name}</Text>
                <Text style={{fontSize:14}} >{actor.character}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius:10,
        height:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginHorizontal:18,
        paddingRight:15,
       
    },
    actorInfo:{
        marginLeft:10,
        marginTop:4,
    }


});
