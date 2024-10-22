import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="bg-amber-400 w-full h-full flex flex-col items-center justify-center">
            <Text className="bg-blue-800">Open up App.js to start working on your app!</Text>
            <Link href="/profile">PROFILE</Link>
        </View>
    );
}