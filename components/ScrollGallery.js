import React, { useRef, useEffect} from 'react';
import { View, Text, Image, ScrollView } from 'react-native'

export default function scrollGallery(props){
    const scrollViewRef = useRef();
    let timer = null, animated = false;

    function handleScroll(scrollrPosition) {
        const x = scrollrPosition;
        scrollViewRef.current.scrollTo({ x, amimated: true });
    }
    
    function handleHandScroll({ nativeEvent: { contentOffset } }) {
        clearTimeout(timer);
    
        const newPosition = Math.round(contentOffset.x / 120);
        const scrollrPosition = newPosition * 120;
        handleScroll(scrollrPosition);
        //setPosition(newPosition);
    }

    function handleTransitingSlide() {
        const newPosition = data.length > position + 1 ? position + 1 : 0;
        const scrollrPosition = newPosition * 120;
    
        timer = setTimeout(() => {
          handleScroll(scrollrPosition);
          setPosition(newPosition);
        }, delay);
    }

    useEffect(() => {
        if (animated) handleTransitingSlide();
        return () => {
          clearTimeout(timer);
        };
    });

    return (
        <View
            style={{
                flex: 1,
                borderRadius: 10,
                marginBottom: 10
                }}
            >
            <ScrollView
                onMomentumScrollEnd={handleHandScroll}
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.data.map((item, key) => (
                <View key={key} style={{ width: 140 }}>
                    {props.renderItem(item)}
                </View>
                ))}
            </ScrollView>
            {false && (
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center'
                    }}>
                {data.map((dot, dotKey) => {
                    if (typeof renderDot === 'function')
                    //return renderDot({ active: position === dotKey }, dotKey);
                    //return <Dot key={`dot-${dotKey}`} active={position === dotKey} />;
                    return ;
                })}
                </View>
            )}
        </View>
    )
}