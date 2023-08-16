import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';

import styles from './style';
const Textinput = ({placeholder,value, onChangeText, inputStyle, defaultValue,numberOfLines,multiline,maxLength}) => {
  return (
    <View>
      <TextInput
        style={[styles.Textinpt, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        numberOfLines={numberOfLines}
        multiline={multiline}
        maxLength={maxLength}
      />
    </View>
  );
};
export default Textinput;
