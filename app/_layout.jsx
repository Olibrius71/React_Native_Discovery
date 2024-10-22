import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
    );
}

