import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';

const HeaderComponent = ({
  onBack,
  onPressSkip,
  backIconStyle,
  leftText,
  rightText,
  onBackGo,
  onBackDone,
}) => {
  return (
    <View style={[styles.headerStyle, backIconStyle]}>
      {!!onBack ? (
        <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ) : (
        <Text style={styles.text} onPress={onBackGo}>
          {leftText}
        </Text>
      )}
      {!!onPressSkip ? (
        <TouchableOpacity onPress={onPressSkip}>
          <Text style={styles.skipIcon} onPress={onBackDone}></Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.text} onPress={onBackDone}>
          {' '}
          {rightText}
        </Text>
      )}
    </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: s(24),
    marginHorizontal: vs(10),
  },
  skipIcon: {
    fontSize: s(17),
    marginHorizontal: s(10),
    color: themeDefault.colors.primaryColor,
  },
  text: {
    fontSize: s(17),
    marginHorizontal: s(10),
    color: themeDefault.colors.primaryColor,
  },
});
