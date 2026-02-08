import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../component/ScreenWrapper'
import Typo from '../component/Typo'
import { colors, spacingX, spacingY } from '@/theme'
import { verticalScale } from '@/styling'
import Animated, { FadeIn } from 'react-native-reanimated'
import Button from '../component/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
const router = useRouter()
  return (
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={{ alignSelf: 'center' }}>
          <Typo color={colors.white} size={43} fontWeight={'900'}>
            Bubbly
          </Typo>
        </View>
        <Animated.Image
          entering={FadeIn.duration(700).springify()}
          source={require("../../assets/welcome.png")}
          style={styles.WelcomeImage}
          resizeMode={'contain'}
        />
        <View>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            Stay Connected
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            With Your friends
          </Typo>
          <Typo color={colors.white} size={33} fontWeight={"800"}>
            and family
          </Typo>
        </View>

        <Button 
        style={{backgroundColor: colors.white}}
        onPress={()=> router.push('/Register')}
        >
          <Typo size={23} fontWeight={'bold'}>Get Started</Typo>
        </Button>

      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: spacingX._20,
    marginVertical: spacingY._10
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900
  },
  WelcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: 'center'
  }

})