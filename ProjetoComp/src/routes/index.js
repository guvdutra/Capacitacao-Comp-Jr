import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Home/index";
import SignIn from "../pages/SignIn/index";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = "SignIn"
            component = {SignIn}
            />
            
            <Stack.Screen
            name = "Home"
            component = {Welcome}
            />
        </Stack.Navigator>
    )
}