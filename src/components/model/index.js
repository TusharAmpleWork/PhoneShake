import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';

const ModalBox = ({
  onPress,
  isVisible,
  closeModal,
  primaryText,
  secondaryText,
  primaryButton,
  secondaryButton,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}>
        <View style={styles.modal}>
          <Text style={styles.text}>{primaryText}</Text>
          <Text style={styles.text}>{secondaryText}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity onPress={closeModal} style={styles.primaryButton}>
              <Text style={styles.primaryButtontext}>{primaryButton}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.secondaryButton}>
              <Text style={styles.secondaryButtontext}>{secondaryButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const ModalView = ({
  onPress,
  isVisible,
  closeModal,
  primaryText,
  secondaryText,
  primaryButton,
  secondaryButton,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}>
        <View style={styles.modal}>
          <Text style={styles.text}>{primaryText}</Text>
          <Text style={styles.text}>{secondaryText}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.secondaryButton}>
              <Text style={styles.secondaryButtontext}>{secondaryButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeDefault.colors.white,
  },
  modal: {
    flex: 1,
    height: vs(212),
    width: s(271),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: vs(5),
  },
  primaryButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: s(35),
    backgroundColor: themeDefault.colors.white,
    width: vs(135),
    borderRadius: vs(5),
    marginTop: vs(20),
    borderWidth: vs(0.5),
    borderColor: themeDefault.colors.pink,
  },
  primaryButtontext: {
    color: themeDefault.colors.pink,
    fontSize: s(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButtontext: {
    color: themeDefault.colors.white,
    fontSize: s(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    fontSize: s(16),
    lineHeight: vs(19),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'column',
  },
  secondaryButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: s(35),
    backgroundColor: themeDefault.colors.primaryColor,
    width: vs(135),
    borderRadius: vs(5),
    marginTop: vs(20),
  },
});

export {ModalBox, ModalView};
