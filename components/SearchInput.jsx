import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
                     title,
                     value,
                     handleChangeText,
                     otherStyles,
                     ...props
                   }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
      
      <View className="w-full bg-black h-16 px-4 bg-black-100 rounded-2xl border-2 border-gray-400 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="text-white font-semibold text-base flex-1 my-3.5"
          value={value}
          placeholder="Rechercher une vidéo"
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        
        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-4 h-4"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
  );
};

export default SearchInput;