import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {Button, PrivacyBtn} from '@button';
import Check from '../../components/checkBox';
import HeaderComponent from '@headerComp';
import SubHead from '@subText';
import {Heading} from '@text';
import styles from './style';

const Privacyp = ({navigation}) => {
  const [btnColor, setBtnColor] = useState(false);
  const [txtColor, setTxtColor] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [state, setState] = useState({
    number: '',
    show: true,
    txtColor: false,
  });
  const handleClick = val => setToggleCheckBox(val);
  const goToLoading = () => {
    navigation.navigate('Loading');
  };
  const PreviousScreen = () => {
    navigation.goBack();
  };
  const goToCompletion = () => {
    navigation.navigate('Loading');
  };
  //height: 530, width: 395
  return (
    <View style={styles.wholepage}>
      <HeaderComponent onBack={PreviousScreen} />
      <Heading title="Privacy Policy" headStyle={{marginTop: s(10)}} />
      <ScrollView style={{marginHorizontal: s(8)}}>
        <SubHead title="1.First Clause" subHad={styles.SubHeadingFirst} />
        <SubHead
          subStyle={styles.SubText}
          title="Contrary to popular belief, 
                 Lorem Ipsum is not simply random text. 
                 It has roots in a piece of classical Latin literature from 45 BC, 
                 making it over 2000 years old. Richard McClintock, 
                 a Latin professor at Hampden-Sydney College in Virginia, 
                 looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, 
                  and going through the cites of the word in classical literature,
                   discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                    “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32."
        />
        <SubHead title="2.Second Clause" subHad={styles.SubHeadingFirst} />
        <SubHead
          subStyle={styles.SubText}
          title="Contrary to popular belief,
                 Lorem Ipsum is not simply random text. 
                 It has roots in a piece of classical Latin literature from 45 BC, 
                 making it over 2000 years old. Richard McClintock, 
                 a Latin professor at Hampden-Sydney College in Virginia, 
                 looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, 
                  and going through the cites of the word in classical literature,
                   discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                    This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                    “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32."
        />
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: vs(20),
        }}>
        <Check onValueChange={handleClick} value={toggleCheckBox} />
        <Text style={toggleCheckBox ? styles.initialText : styles.finalText}>
          Accept
          <Text
            style={
              toggleCheckBox ? styles.initialTextColor : styles.finalTextColor
            }>
            {' Privacy Policy '}
          </Text>
          <Text style={toggleCheckBox ? styles.initialText : styles.finalText}>
            and
            <Text
              style={
                toggleCheckBox ? styles.initialTextColor : styles.finalTextColor
              }>
              {' Terms of Service'}
            </Text>
          </Text>
        </Text>
      </View>

      <Button
        disabled={toggleCheckBox ? false : true}
        textStyle={toggleCheckBox ? styles.initialstate : styles.finalstate}
        title="Continue"
        onPress={goToCompletion}
      />
    </View>
  );
};

export default Privacyp;
