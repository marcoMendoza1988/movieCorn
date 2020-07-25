import * as React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';

export default function AnimeContentInfo({ route }){
    let { animeData } = route.params; 
    let { synopsis, url, title, genres } = JSON.parse(animeData) 

    //console.log(genres)
    return (
        <View style={{flex: 1, backgroundColor: '#000' }}>
            <ScrollView>
                <View style={{alignContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 26, paddingTop: 15, paddingBottom: 15 }}>{title}</Text>
                    <Image 
                        style={{ height: 520, width: '85%' }}
                        source={{ uri: url }}
                    />
                </View>
                <View style={{padding: 10, flex: 1}}>
                    <ScrollView horizontal>
                        <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
                            {genres && genres.map(res => 
                                <Text style={{ 
                                    textAlign: 'center', 
                                    marginRight: 8,
                                    marginTop: 20,
                                    marginBottom: 15, 
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingRight: 15,
                                    paddingLeft: 15, 
                                    backgroundColor: '#ff8000', 
                                    color: '#FFFFFF', 
                                    borderRadius: 10 
                                }}>{res.name.toUpperCase()}</Text>
                            )}
                        </View>
                    </ScrollView>
                    <Text style={{ fontSize: 20, color: '#FFFFFF' }}>SYNOPSIS:</Text>
                    <Text style={{ fontSize: 16, color: '#FFFFFF' }}>{synopsis}</Text>
                </View>
            </ScrollView>
        </View>
    )
}