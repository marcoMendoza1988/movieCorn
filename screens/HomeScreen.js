import * as React from 'react';
import { View, Text, Image } from 'react-native'
import { Block, withGalio, GalioProvider } from 'galio-framework';
import ListGallery from 'react-native-list-gallery';

function renderImage({ url }) {
    return <Block row space={'between'} width={140} style={{
        height: 220,
        padding: 5,
    }}><Image  
        style={{
            height: 220,
            width: '100%',
        }}
        source={{ uri: url }} 
    /></Block>
}

  
export default function HomeScreen() {
    return (
        <Block flex>
            <Block row>
                <ListGallery
                    imagewidth={140}
                    containerStyle={{backgroundColor: '#CECECE'}}
                    animated={false}
                    data={[
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' }
                    ]}
                    delay={3000}
                    renderItem={renderImage}
                />
            </Block>
            <Block row>
                <ListGallery
                    imagewidth={140}
                    containerStyle={{backgroundColor: '#CECECE'}}
                    animated={false}
                    data={[
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' }
                    ]}
                    delay={3000}
                    renderItem={renderImage}
                />
            </Block>
            <Block row>
                <ListGallery
                    imagewidth={140}
                    containerStyle={{backgroundColor: '#CECECE'}}
                    animated={false}
                    data={[
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg' },
                        { url: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg' }
                    ]}
                    delay={3000}
                    renderItem={renderImage}
                />
            </Block>
        </Block>
    );
}