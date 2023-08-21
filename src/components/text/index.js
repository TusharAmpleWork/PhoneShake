import React from 'react';
import {Text, View, Dimensions,Image} from 'react-native';
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
      <Text style={[styles.textStyle,sectionStyle]} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};
const Section=({text,sectionStyle})=>{
  return(
      <View style={[styles.section,sectionStyle]}>
  <Text style={styles.sectionTitle}>{text}</Text>
</View>
  )
}
const SubSection = ({text, name, icon, iconStyle,onPress,source,sectionText}) => {
  return (
    <View style={[styles.subSection,sectionText]}  >
      <Image source={source} style={[styles.subSectionTitle]}  />
      <Text  style={styles.subSectionTitle}>{text}</Text>
      <View style={styles.subSectionView}>
        <Text  style={styles.subText}>{name}</Text>
        <Icon onPress={onPress} name={'right'} style={[styles.icon, iconStyle]}
       
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
