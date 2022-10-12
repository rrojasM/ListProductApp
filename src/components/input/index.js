import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Image, Modal, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({ label, type, options, isPassword, value, onChangeText, placeholder, style, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

    const onEyePress = () => {
        setIsVisible(!isVisible);
    };

    const onSelected = (opt) => {
        onChangeText(opt);
        setIsPickerModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === "picker" ? (
                <Pressable onPress={() => setIsPickerModalVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text style={[styles.input, style]}>{value?.title}</Text>
                    ) : (
                        <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                    )}
                    <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isVisible} style={[styles.input, style]} {...props} />
                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image
                                style={styles.eye}
                                source={
                                    isVisible
                                        ? require("../../assets/eye.png")
                                        : require("../../assets/eyeIcon.png")
                                }
                            />
                        </Pressable>
                    ) : null}
                </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setIsPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modelContent}>
                        <Text style={styles.headerTitle}>Select options</Text>
                        {options?.map(opt => {
                            if (!opt?.id) {
                                return null
                            }
                            const selected = value?.id === opt?.id
                            return (
                                <Text onPress={() => onSelected(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                            )
                        })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

export default Input;