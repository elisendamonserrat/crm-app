import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "#b9bbce";
    color = "white";
  } else {
    backgroundColor = "#443cf4";
    color = "white";
  }

  return StyleSheet.create({
    button: {
      width: "70vw",
      borderRadius: 10,
      margin: 10,
      padding: 10,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      textTransform: "uppercase",
      alignSelf: "center"
    },
    text: {
      color: color,
      fontWeight: 600,
      fontSize: 18,
    },
  });
};

export default stylesFn;
