import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import { theme } from '../../../constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';

import styles from './style';
import { strings } from '../../../localization/i18n';
export const CustomDatePicker = ({
    placeholder,
    onChange,
    value,
    errorMsg,
    ...props
}: {
    placeholder: string;
    onChange: Function;
    value: Date;
    errorMsg?: string;
}) => {
    //   console.log(maxNumber);
    const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
    const [show, setShow] = useState(false);

    const onChangeValue = (event: any, selectedDate: any) => {
        setShow(false);
        const currentDate = selectedDate || value;
        // console.log(currentDate);
        onChange(currentDate);
    };

    const showMode = (bool: boolean) => {
        setShow(bool);
    };

    return Platform.OS == 'android' ? (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.textInput, props.style, { height: errorMsg ? 65 : 45 }]}
            onPress={() => showMode(true)}>
            <Text style={styles.text}>{value.toDateString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode={mode}
                    display="default"
                    onChange={onChangeValue}
                />
            )}
            {errorMsg ? (
                <Text style={styles.errorMsg} numberOfLines={1}>
                    {errorMsg}
                </Text>
            ) : null}
        </TouchableOpacity>
    ) : (
        <>
            <DatePicker
                style={[styles.iosTextInput, props.style, { height: errorMsg ? 65 : 45 }]}
                date={value}
                mode="date"
                placeholder={value.toDateString()}
                format="YYYY-MM-DD"
                confirmBtnText={strings('confirm')}
                cancelBtnText={strings('cancel')}
                customStyles={{
                    dateIcon: styles.dateIcon,
                    dateInput: styles.dateInput,
                }}
                onDateChange={onChangeValue}
            />
            {errorMsg ? (
                <Text style={styles.errorMsg} numberOfLines={1}>
                    {errorMsg}
                </Text>
            ) : null}
        </>
    );
};
