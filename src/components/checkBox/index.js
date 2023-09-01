import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {s, vs, ms, ScaledSheet} from 'react-native-size-matters/extend';
const Check = ({onValueChange, onChange, value}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CheckBox
      style={styles.checkbox}
      disabled={false}
      value={value}
      onValueChange={onValueChange}
      boxType="square"
    />
  );
};
const styles = ScaledSheet.create({
  checkbox: {
    marginTop: vs(7),
    height: vs(10),
    width: s(20),
    paddingHorizontal: vs(10),
  },
});

export default Check;
