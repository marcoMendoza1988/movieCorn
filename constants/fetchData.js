import * as React from 'react';

export default async function fetchData(url, setAnimeList){
    let myRequest = new Request(url, {
        "method": "GET", 
        headers:{
            'Content-Type': 'application/json'
        },
    });
    try{
        let _fetch = await fetch(myRequest);
        let anime =  await _fetch.json()
    
        let dataFilter = [];
        anime.data.map(res => {
            console.log(res)
            dataFilter.push({
                url: res.attributes.posterImage.large, 
                synopsis: res.attributes.synopsis, 
                title: res.attributes.canonicalTitle, 
                episodes: res.attributes.episodeCount, 
                youtubeVideo: res.attributes.youtubeVideoId,
                //genres: res.genres, 
                //licensors: res.licensors
            })
        })
        /*data.anime.map(res => {
            anime.push({url: res.image_url, synopsis: res.synopsis, title: res.title, episodes: res.episodes, genres: res.genres, licensors: res.licensors})
        })*/

        setAnimeList(dataFilter)
    }catch(error){
        console.warn(error)
    };
}