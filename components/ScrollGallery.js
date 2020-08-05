import React, { useRef, useEffect} from 'react';
import { View, Text, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default function scrollGallery(props){
    const scrollViewRef = useRef();
    let timer = null, animated = false;
    let _width = (Number(width) / props.quantity)

    //console.log(_width)
    function handleScroll(scrollrPosition) {
        const x = scrollrPosition;
        scrollViewRef.current.scrollTo({ x, amimated: true });
    }
    
    function handleHandScroll({ nativeEvent: { contentOffset } }) {
        clearTimeout(timer);
        const newPosition = Math.round(contentOffset.x / (_width));
        const scrollrPosition = newPosition * _width;
        handleScroll(scrollrPosition);
        //setPosition(newPosition);
    }

    return (
        <View
            style={{
                flex: 1,
                borderRadius: 10,
                marginBottom: 10,
                }}
            >
            <ScrollView
                onMomentumScrollEnd={handleHandScroll}
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.data.map((item, key) => (
                <View key={key} style={{ width: _width }}>
                    {props.renderItem(item, props.navigation ? props.navigation : null, props.heightImg && props.heightImg)}
                </View>
                ))}
            </ScrollView>
        </View>
    )
}