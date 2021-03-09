import React from 'react';
import { TextInput as TI, Text, View } from 'react-native';
import { theme } from '../../../constants';

import styles from './style';
// import { TextInput as PapTextInput } from 'react-native-paper';
export const TextInput = ({
    placeholder,
    onChangeText,
    value,
    maxLength,
    keyboardType,
    maxNumber,
    errorMsg,
    ...props
}: {
    placeholder: string;
    onChangeText: Function;
    value: string;
    maxLength?: number;
    keyboardType?: string;
    maxNumber?: number;
    errorMsg?: string;
}) => {
    //   console.log(maxNumber);
    return (
        <View style={[styles.textInput, props.style, { height: errorMsg ? 70 : 45 }]}>
            <TI
                placeholder={placeholder}
                placeholderTextColor={theme.colors.darkGrey}
                selectionColor={theme.colors.primary}
                onChangeText={(value) => {
                    //   console.log(maxNumber, value <= maxNumber);
                    if (maxNumber) {
                        if (value <= maxNumber) {
                            onChangeText(value);
                        }
                    } else {
                        onChangeText(value);
                    }
                }}
                value={value}
                maxLength={maxLength}
                keyboardType={keyboardType}
                style={{ flex: 1 }}
                {...props}
            />
            {errorMsg ? (
                <Text style={styles.errorMsg} numberOfLines={1}>
                    {errorMsg}
                </Text>
            ) : null}
        </View>
    );
};
