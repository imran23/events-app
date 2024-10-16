import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const CameraPermissionDialog: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Company would like to access your camera</Text>
          <Text style={styles.description}>
            To take photos of your card and upload the photo.
          </Text>

          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={styles.buttonLeft}
              onPress={() => {
                console.log("Don't Allow clicked");
                onClose();
              }}
            >
              <Text>Don't Allow</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRight}
              onPress={() => {
                console.log("OK clicked");
                onClose();
              }}
            >
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // for backdrop blur effect
  },
  dialog: {
    backgroundColor: '#F2F2F2',
    height: 273,
    width: 167,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    width: 241,
    height: 44,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.078,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonLeft: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#3C3C435C',
  },
  buttonRight: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraPermissionDialog;
