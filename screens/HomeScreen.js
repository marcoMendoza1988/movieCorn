import React, {useEffect, useState} from 'react';
import { 
    Image, 
    ScrollView, 
    SafeAreaView, 
    TouchableHighlight, 
    Dimensions 
} from 'react-native';
import { Block, Button, Text } from 'galio-framework';
import ScrollGallery from '../components/ScrollGallery';
import { Entypo } from '@expo/vector-icons'; 

import fetchData from '../constants/fetchData';

const { width } = Dimensions.get('screen');

function renderImage(data, navigation, heightImg) {
    return (
    <Block flex style={{
        padding: 3,
    }}>       
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('AnimeContent', { animeData: `${JSON.stringify(data)}` })}>
            <Image  
                style={{ height: heightImg ? heightImg : 190, width: '100%', position: 'relative' }}
                source={{ uri: data.url }} 
            />    
        </TouchableHighlight>
        <Block row style={{ position: 'relative', padding: 4, backgroundColor: '#06B2CC', height: 80 }}>
            <Text size={12} style={{color: '#FFFFFF' }}>{data.title}</Text>
            <Entypo style={{ position: 'absolute', bottom: 4, right: 0 }} name="dots-three-vertical" size={24} color="black" />
        </Block>
    </Block>)
}

function renderCover_page(data, navigation, heightImg) {
    console.log(data)
    return (
        <Block row space={'between'} style={{
            height: 'auto',
            padding: 3,
        }}>
            <Image  
                style={{ height: heightImg ? heightImg : 220, width: '100%' }}
                source={{ uri: data.url }} 
            />
            <Block width={width} style={{position: 'absolute', bottom: 0, padding: 8, backgroundColor: 'rgba(46, 46, 46, 0.59)'}}>
                <Text style={{color: '#FFF'}}>{data.title}</Text>
                <Text style={{color: '#FFF' }}>{data.synopsis}</Text>
            </Block>
        </Block>)
}

export default function HomeScreen({ navigation }) {
    let [animeLisit, setAnimeList] = useState([])
    let [animeLisit2, setAnimeList2] = useState([])
    let [animeLisit3, setAnimeList3] = useState([])
    let [animeLisit4, setAnimeList4] = useState([])
    let [AnimeListMain, setAnimeListMain] = useState([])
    

    useEffect(() =>{
        fetchData("https://kitsu.io/api/edge/anime?filter[season]=spring&filter[seasonYear]=2020&page[limit]=5", setAnimeListMain)
        fetchData("https://kitsu.io/api/edge/anime?filter[categories]=action&filter[seasonYear]=2020&page[limit]=20", setAnimeList)
        fetchData("https://kitsu.io/api/edge/anime?filter[categories]=adventure&filter[seasonYear]=2019&page[limit]=20", setAnimeList2)
        fetchData("https://kitsu.io/api/edge/anime?filter[categories]=demon&filter[seasonYear]=2019&page[limit]=20", setAnimeList3)
        fetchData("https://kitsu.io/api/edge/anime?filter[categories]=comedy&filter[seasonYear]=2019&page[limit]=20", setAnimeList4)
    }, [])

    
    return (
        <SafeAreaView  style={{backgroundColor: '#000'}}>
            <ScrollView>
                <Block row>
                    <ScrollGallery data={AnimeListMain} quantity={1} renderItem={renderCover_page} navigation={navigation} heightImg={540} />
                </Block>
                <Block flex>
                    <Button color="#333333" style={{ marginTop: 25, width: '100%', marginLeft: 0, textAlign: 'left', paddingTop: 25, paddingBottom: 25, borderRadius: 0 }}>Action</Button>
                    <Block row>
                        <ScrollGallery data={animeLisit} quantity={3} renderItem={renderImage} navigation={navigation} />
                    </Block>
                    <Button color="#333333" style={{ marginTop: 25, width: '100%', marginLeft: 0, textAlign: 'left', paddingTop: 25, paddingBottom: 25, borderRadius: 0 }}>Adventure</Button>
                    <Block row>
                    <ScrollGallery data={animeLisit2} quantity={3} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                    <Button color="#333333" style={{ marginTop: 25, width: '100%', marginLeft: 0, textAlign: 'left', paddingTop: 25, paddingBottom: 25, borderRadius: 0 }}>Demons</Button>
                    <Block row>
                    <ScrollGallery data={animeLisit3} quantity={3} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                    <Button color="#333333" style={{ marginTop: 25, width: '100%', marginLeft: 0, textAlign: 'left', paddingTop: 25, paddingBottom: 25, borderRadius: 0 }}>Comedy</Button>
                    <Block row>
                        <ScrollGallery data={animeLisit4} quantity={3} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                </Block>
            </ScrollView>
        </SafeAreaView>
    );
}