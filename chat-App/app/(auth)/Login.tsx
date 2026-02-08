import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../component/ScreenWrapper'
import Typo from '../component/Typo'
import { colors, radius, spacingX, spacingY } from '@/theme'
import BackButton from '../component/BackButton'
import Input from '../component/Input'
import * as Icons from "phosphor-react-native"
import { verticalScale } from '@/styling'
import { useRouter } from 'expo-router'
import Button from '../component/Button'

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()


    const HandleSubmit = async () => {
        if(!emailRef.current || !passwordRef.current){
            Alert.alert("Login", "Please Fill All The Field");
            return
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScreenWrapper showPattern={true}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <BackButton iconSize={28} />
                        <Typo size={17} color={colors.white}>
                            Forgot Your password?
                        </Typo>
                    </View>

                    <View style={styles.content}>
                        <ScrollView
                            contentContainerStyle={styles.form}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ gap: spacingY._10, marginBottom: spacingY._15 }}>
                                <Typo size={28} fontWeight={"600"}>
                                    Welcome back
                                </Typo>
                                <Typo color={colors.neutral600}>
                                    We are happy to see you!
                                </Typo>
                            </View>

                            <Input
                                placeholder='Enter Your Email'
                                onChangeText={(value: string) => (emailRef.current = value)}
                                icon={
                                    <Icons.AtIcon
                                        size={verticalScale(26)}
                                        color={colors.neutral600}
                                    />
                                }
                            />
                            <Input
                                placeholder='Enter Your Password'
                                secureTextEntry
                                onChangeText={(value: string) => (passwordRef.current = value)}
                                icon={
                                    <Icons.LockIcon
                                        size={verticalScale(26)}
                                        color={colors.neutral600}
                                    />
                                }
                            />
                            <View style={{ marginTop: spacingY._25, gap: spacingY._15 }}>
                                <Button loading={isLoading} onPress={HandleSubmit}>
                                    <Typo fontWeight={'bold'} size={20} color={colors.black}>
                                        Login
                                    </Typo>
                                </Button>

                                <View style={styles.footer}>
                                    <Typo>Dont't have an account?</Typo>
                                    <Pressable onPress={() => router.push('/(auth)/Register')}>
                                        <Typo fontWeight={'bold'} color={colors.primaryDark}>
                                            Sign Up
                                        </Typo>
                                    </Pressable>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScreenWrapper>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingY._15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        borderCurve: "continuous",
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20
    },
    form: {
        gap: spacingY._15,
        marginTop: spacingY._20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})