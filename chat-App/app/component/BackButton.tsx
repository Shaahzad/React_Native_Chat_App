import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonProps } from '@/types'
import { colors } from '@/theme'
import { useRouter } from 'expo-router'
import { verticalScale } from '@/styling'
import {CaretLeftIcon} from "phosphor-react-native"

const BackButton = ({
    color = colors.white,
    iconSize = 26,
    style
}: BackButtonProps) => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
            <CaretLeftIcon size={verticalScale(iconSize)} color={color} weight="bold" />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    button: {

    }
})