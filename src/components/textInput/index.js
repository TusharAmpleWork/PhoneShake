import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';

import styles from './style';
const Textinput = ({placeholder, onChangeText, inputStyle, defaultValue}) => {
  return (
    <View>
      <TextInput
        style={[styles.Textinpt, inputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  );
};
export default Textinput;
