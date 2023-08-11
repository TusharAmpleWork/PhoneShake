import {StyleSheet} from 'react-native';
import {scale, ScaledSheet, verticalScale, vs} from 'react-native-size-matters/extend';
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

export default styles;
