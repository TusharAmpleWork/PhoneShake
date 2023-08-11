import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';

const HeaderComponent = ({onBack, onPressSkip,backIconStyle}) => {
  return (
    <View style={[styles.headerStyle,backIconStyle]}>
      {!!onBack ? (
        <TouchableOpacity activeOpacity={0.6} onPress={onBack}>
          <Image
            source={require('../../assets/images/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      {!!onPressSkip ? (
        <TouchableOpacity onPress={onPressSkip}>
          <Text style={styles.skipIcon}>{'skip'}</Text>
        </TouchableOpacity>
      ) : (
        <Text />
      )}
    </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: vs(40),
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
});
