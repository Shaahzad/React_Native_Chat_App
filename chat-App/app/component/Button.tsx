import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from '@/types'
import { colors, radius } from '@/theme'
import { verticalScale } from '@/styling'
import Loading from './Loading'

const Button = ({
    children,
    loading = false,
    onPress,
    style
}: ButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, { backgroundColor: 'transparent' }]}>
                <Loading />
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius.full,
        borderCurve: 'continuous',
        height: verticalScale(56),
        justifyContent: 'center',
        alignItems: 'center'
    }
})