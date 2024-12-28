import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

export default function CustomButton({ title, onPress }: { onPress?: ((event: GestureResponderEvent) => void) | null, title: string }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#007bff",
                padding: 10,
                borderRadius: 20,
            }]}
        >
            <Text style={{ color: "#ffffff", fontSize: 16 }}>{title}</Text>
        </Pressable>
    )
}
