import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/welcome/index.js";
import AddUserScreen from "./screens/users/New.js";
import EditUserScreen from "./screens/users/Edit.js";
import ListUsersScreen from "./screens/users/List.js";
import ListRegionsScreen from "./screens/regions/index.js";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Regions" component={ListRegionsScreen} />
        <Stack.Screen name="Users By Region" component={ListUsersScreen} />
        <Stack.Screen name="Add User" component={AddUserScreen} />
        <Stack.Screen name="Edit User" component={EditUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
