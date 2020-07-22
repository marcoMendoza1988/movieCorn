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
        let data =  await _fetch.json()
    
        let anime = [];

        data.anime.map(res => {
            anime.push({url: res.image_url, synopsis: res.synopsis, title: res.title, episodes: res.episodes, genres: res.genres, licensors: res.licensors})
        })

        setAnimeList(anime)
    }catch(error){
        console.warn(error)
    };
}