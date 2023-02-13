import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "grey";
    color = "black";
  } else {
    backgroundColor = "blue";
    color = "white";
  }

  return StyleSheet.create({
    button: {
      width: 200,
      borderRadius: 10,
      margin: 10,
      padding: 10,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      textTransform: "uppercase"
    },
    text: {
      color: color,
    },
  });
};

export default stylesFn;
