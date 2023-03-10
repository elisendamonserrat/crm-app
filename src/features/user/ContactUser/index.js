import React, { useEffect } from "react";
import { Keyboard, View } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Title from "../../../components/Title/index.js";
import Button from "../../../components/Button/index.js";
import { useNavigation } from "@react-navigation/native";

const usersToContatc = ["John Doe", "Mae Black", "Max Well", "Thom Bush"];

const onSubmit = (seconds) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: `Today you should contact ${
        usersToContatc[Math.floor(Math.random() * usersToContatc.length)]
      }`,
      body: "Open the app to read more about your the client you need to contact!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: seconds,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(schedulingOptions);
};

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted") {
    console.log("Notification permissions granted.");
  }
};

const ContactUser = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  const handleSubmit = () => {
    onSubmit(5);
    navigate("Welcome");
  };
  return (
    <View style={{ flex: 1 }}>
      <Title text="Press the button to notify of which user's you should contact" />

      <Button onPress={handleSubmit} text="Schedule" />
    </View>
  );
};

export default ContactUser;
