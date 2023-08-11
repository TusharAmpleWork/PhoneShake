import React, {useState} from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
const Check = ({onValueChange, onChange, value}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CheckBox
      style={styles.checkbox}
      disabled={false}
      value={value}
      onValueChange={onValueChange}
    />
  );
};
export default Check;
