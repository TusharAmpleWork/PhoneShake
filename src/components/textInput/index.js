import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {
  scale,
  ScaledSheet,
  verticalScale,
  vs,
} from 'react-native-size-matters/extend';
const Textinput = ({
  placeholder,
  value,
  onChangeText,
  inputStyle,
  defaultValue,
  numberOfLines,
  multiline,
  maxLength,
}) => {
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
        autoCapitalize={'none'}
        autoCorrect={false}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  Textinpt: {
    height: verticalScale(40),
    width: scale(300),
    fontSize: scale(18),
    marginTop: verticalScale(71),
    textAlign: 'center',
    marginLeft: vs(30),
    borderBottomWidth: scale(1),
    borderColor: '#00000033',
  },
});
export default Textinput;
