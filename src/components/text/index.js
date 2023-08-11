import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {moderateScale, scale,s,vs} from 'react-native-size-matters/extend';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');
const Heading = ({title, headStyle,TopheadStyle,onPress}) => {
  return (
    <View style={[styles.headText, headStyle,TopheadStyle]}>
      <Text style={[styles.headText, headStyle,TopheadStyle]}>{title}</Text>
    </View>
  );
};
const SubHeading = ({title, sectionStyle, onPress}) => {
  return (
    <View>
      <Text style={styles.textStyle} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};
const Section=({text,sectionStyle})=>{
  return(
      <View style={[styles.section,sectionStyle]}>
  <Text style={[styles.sectionTitle]}>{text}</Text>
</View>
  )
}
const SubSection = ({text, name, icon, iconStyle,onPress}) => {
  return (
    <View style={[styles.subSection]}>
      <Text style={[styles.subSectionTitle]}>{text}</Text>
      <View style={[styles.subSectionView]}>
        <Text style={[styles.subText]}>{name}</Text>
        <Icon name={'right'} style={[styles.icon, iconStyle]}
        onPress={onPress}
        />
      </View>
    </View>
  );
};
const MainText=({title})=>{
  return(
    <View style={styles.mainHeading} >
      <Text style={styles.heading}>{title}</Text>
    </View>
  )
}
const Icons = ({icon, icon2, icon3}) => {
  return (
    <View style={styles.subIcon}>
      <Icon name={icon} style={{fontSize: s(20), color: '#A8A8A8'}} />
      <Icon2 name={icon2} style={{fontSize: s(20), color: '#A8A8A8'}} />
      <Icon3 name={icon3} style={{fontSize: s(20), color: '#A8A8A8'}} />
    </View>
  );
};

export {Heading, SubHeading, SubSection,MainText,Section, Icons};
