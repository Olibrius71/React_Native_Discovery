import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="bg-black flex-1 justify-center items-center">
            <Text className="font-bold text-white text-3xl">Projet</Text>
            <Link href="/home" className="m-2 text-white underline">Go to Home</Link>
        </View>
    );
}