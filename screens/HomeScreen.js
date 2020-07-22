import React, {useEffect, useState} from 'react';
import { 
    Image, 
    ScrollView, 
    SafeAreaView, 
    TouchableHighlight, 
    Dimensions 
} from 'react-native';
import { Block, Button } from 'galio-framework';
import ScrollGallery from '../components/ScrollGallery';
import fetchData from '../constants/fetchData';

const { width } = Dimensions.get('screen');

function renderImage(data, navigation) {
    return (
    <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('AnimeContent', { animeData: `${JSON.stringify(data)}` })}>
        <Block row space={'between'} style={{
            height: 'auto',
            padding: 5,
        }}>
            <Image  
                style={{ height: 220, width: '100%' }}
                source={{ uri: data.url }} 
            />
        </Block>
    </TouchableHighlight>)
}

export default function HomeScreen({ navigation }) {
    let [animeLisit, setAnimeList] = useState([])
    let [animeLisit2, setAnimeList2] = useState([])
    let [animeLisit3, setAnimeList3] = useState([])
    let [animeLisit4, setAnimeList4] = useState([])

    

    useEffect(() =>{
        fetchData("https://private-amnesiac-13b031-jikan.apiary-proxy.com/v3/genre/anime/1/1", setAnimeList)
        fetchData("https://private-amnesiac-13b031-jikan.apiary-proxy.com/v3/genre/anime/2/1", setAnimeList2)
        fetchData("https://private-amnesiac-13b031-jikan.apiary-proxy.com/v3/genre/anime/3/1", setAnimeList3)
        fetchData("https://private-amnesiac-13b031-jikan.apiary-proxy.com/v3/genre/anime/4/1", setAnimeList4)
    })
    
    return (
        <SafeAreaView  style={{backgroundColor: '#000'}}>
            <ScrollView>
                <Block flex>
                    <Button link>Action:</Button>
                    <Block row>
                        <ScrollGallery data={animeLisit} quantity={1} renderItem={renderImage} navigation={navigation} />
                    </Block>
                    <Button>Adventure:</Button>
                    <Block row>
                    <ScrollGallery data={animeLisit2} quantity={2} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                    <Button>Cars:</Button>
                    <Block row>
                    <ScrollGallery data={animeLisit3} quantity={3} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                    <Button>Comedy:</Button>
                    <Block row>
                        <ScrollGallery data={animeLisit4} quantity={4} renderItem={renderImage} navigation={navigation}/>
                    </Block>
                </Block>
            </ScrollView>
        </SafeAreaView>
    );
}