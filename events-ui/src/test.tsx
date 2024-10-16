import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import { useState } from 'react';

const CameraPermissionDialog = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAllow = () => {
    console.log("OK button clicked");
    setModalVisible(false);
  };

  const handleDeny = () => {
    console.log("Don't Allow button clicked");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Insurance"
        onPress={() => setModalVisible(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>
              Company would like to access your camera
            </Text>
            <Text style={styles.description}>
              To take photos of your card and upload the photo.
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonDeny]}
                onPress={handleDeny}
              >
                <Text style={styles.textStyle}>Don't Allow</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonAllow]}
                onPress={handleAllow}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Backdrop filter effect
  },
  modalView: {
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    width: 273,
    height: 167,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    width: 241,
    height: 44,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 1,
    fontSize: 18,
  },
  description: {
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.078,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 273,
    height: 44,
  },
  button: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  buttonDeny: {
    borderRightWidth: 0.5,
    borderColor: '#3C3C435C',
  },
  buttonAllow: {},
  textStyle: {
    fontSize: 16,
  },
});

export default CameraPermissionDialog;
