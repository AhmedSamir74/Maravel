import React from 'react';
import { Text, TextInput as TI, View } from 'react-native';
import { theme } from '../../../constants';

import styles from './style';
// import { TextInput as PapTextInput } from 'react-native-paper';
export const TextArea = ({
    placeholder,
    onChangeText,
    value,
    maxLength,
    keyboardType,
    errorMsg,
    ...props
}: any) => {
    return (
        <View style={[styles.textInput, props.style, { height: errorMsg ? 105 : 80 }]}>
            <TI
                placeholder={placeholder}
                placeholderTextColor={theme.colors.darkGrey}
                style={styles.textInput}
                selectionColor={theme.colors.primary}
                onChangeText={onChangeText}
                value={value}
                maxLength={maxLength}
                keyboardType={keyboardType}
                style={{ flex: 1 }}
                numberOfLines={10}
                multiline={true}
                {...props}
            />
            {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
        </View>
        // <>
        //     <Text style={styles.textInputLabel}>{placeholder}</Text>
        //     <PapTextInput
        //         value={value}
        //         mode="outlined"
        //         placeholder={placeholder}
        //         placeholderTextColor={theme.colors.darkGrey}
        //         onChangeText={onChangeText}
        //         style={styles.textInput}
        //         paddingTop={0}
        //         maxLength={maxLength}
        //         keyboardType={keyboardType}
        //     />
        // </>
    );
};
