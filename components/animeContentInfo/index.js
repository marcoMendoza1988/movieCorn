import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function AnimeContentInfo({ route }){
    let { animeData } = route.params; 
    let { synopsis, url, title } = JSON.parse(animeData) 

    //console.log(animeInfo)
    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={{alignContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{ fontSize: 26, paddingTop: 15, paddingBottom: 15 }}>{title}</Text>
                    <Image 
                        style={{ height: 440, width: '75%' }}
                        source={{ uri: url }}
                    />
                </View>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 16}}>{synopsis}</Text>
                </View>
            </ScrollView>
        </View>
    )
}