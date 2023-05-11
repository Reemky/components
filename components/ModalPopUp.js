import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ModalComponent = ({ visible, setVisible, children }) => { // Animation & rendering
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.modalContainer}
          activeOpacity={0.5}
          onPressOut={() => {
            setVisible(false);
          }}
        >
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          <ScrollView>{children}</ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const ModalPopUp = ({ children, textColor, fontSize, label }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <ModalComponent visible={visible} setVisible={setVisible}>
        {children}
      </ModalComponent>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={{ color: textColor, fontSize: fontSize }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "85%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 20,
  },
});

ModalPopUp.propTypes = {
  toggleType: PropTypes.oneOf(["button", "text", "icon"]).isRequired,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
};

ModalPopUp.defaultProps = {
  toggleType: "button",
  textColor: "blue",
  fontSize: 15,
};

export default ModalPopUp;
