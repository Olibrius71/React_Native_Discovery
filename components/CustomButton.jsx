import {View, Text, TouchableOpacity} from "react-native";

const CustomButton = ({ label, fontSizeClass, clickFunction }) => {
    return (
        <TouchableOpacity
            className="bg-primary rounded-md p-3 items-center justify-center"
            onPress={clickFunction}
        >
            <Text className={`text-white ${fontSizeClass} font-bold`}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
