import { Image, View, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { strings } from '../../../localization/i18n';

export const ImagePicker = ({
    title,
    style,
    onImageChange,
    defaultImg,
    isDisabled,
}: {
    title?: string;
    style?: object;
    onImageChange: Function;
    defaultImg?: string | null;
    isDisabled?: boolean;
}) => {
    const [image, setImage] = useState(defaultImg);

    // useEffect(() => {
    //   console.log(images);
    // }, [images]);

    const pickImage = async () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response: any) => {
                // console.log(JSON.stringify(response, null, 4));
                setImage(response.uri);
                onImageChange(response);
            }
        );
    };

    return (
        <TouchableOpacity onPress={pickImage} disabled={isDisabled}>
            {image ? (
                <Image
                    source={{
                        uri: image,
                    }}
                    style={[styles.pickImg, style]}
                />
            ) : (
                <View style={[styles.pickImg, style]}>
                    <Text style={styles.pickText}>{title ? title : strings('pickPoster')}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};
