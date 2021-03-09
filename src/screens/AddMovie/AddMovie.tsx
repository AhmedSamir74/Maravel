import React, { useState } from 'react';
import { CustomDatePicker, ImagePicker, TextArea, TextInput } from '../../components/UI';

import styles from './style';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import { strings } from '../../localization/i18n';
import { string as YupString, object as YupObject } from 'yup';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../services/redux/actions';

export const AddMovieScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const submitSearch = (values: any) => {
        dispatch(
            addMovie(values.poster, values.title, values.overview, values.date, () =>
                navigation.navigate('Home')
            )
        );
    };

    const SignupSchema = YupObject().shape({
        title: YupString().required('Required'),
        overview: YupString().required('Required'),
    });
    return (
        <View style={styles.layout}>
            <View style={styles.flexOne}>
                <Formik
                    validationSchema={SignupSchema}
                    initialValues={{
                        poster: null,
                        title: '',
                        overview: '',
                        date: new Date(),
                    }}
                    onSubmit={submitSearch}>
                    {({
                        handleChange,
                        setFieldValue,
                        handleSubmit,
                        values,
                        handleBlur,
                        errors,
                        touched,
                    }: any) => (
                        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                            <View style={styles.inputCon}>
                                <View style={styles.flexOne}>
                                    <View style={styles.imgContainer}>
                                        <ImagePicker
                                            defaultImg={values.poster}
                                            onImageChange={(result: any) =>
                                                setFieldValue('poster', result.uri)
                                            }
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            placeholder={strings('title')}
                                            onChangeText={handleChange('title')}
                                            value={values.title}
                                            onBlur={handleBlur('title')}
                                            errorMsg={
                                                errors.title && touched.title ? errors.title : null
                                            }
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <TextArea
                                            placeholder={strings('overview')}
                                            onChangeText={handleChange('overview')}
                                            value={values.overview}
                                            onBlur={handleBlur('overview')}
                                            errorMsg={
                                                errors.overview && touched.overview
                                                    ? errors.overview
                                                    : null
                                            }
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <CustomDatePicker
                                            placeholder={strings('date')}
                                            value={values.date}
                                            onChange={(value: Date) => setFieldValue('date', value)}
                                        />
                                    </View>
                                </View>

                                <Button
                                    disabled={!values.title || !values.overview}
                                    onPress={handleSubmit}
                                    mode="contained"
                                    dark
                                    style={styles.submitButton}>
                                    {strings('submit')}
                                </Button>
                            </View>
                        </ScrollView>
                    )}
                </Formik>
            </View>
        </View>
    );
};
