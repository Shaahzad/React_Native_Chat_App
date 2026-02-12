import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/authContext'
import ScreenWrapper from '../component/ScreenWrapper'
import Typo from '../component/Typo'
import { colors } from '@/theme'
import Button from '../component/Button'

const Home = () => {
const {user, signOut} = useAuth()


const HandleLogout = async() => {

}
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Home</Typo>


      <Button onPress={HandleLogout}>
        <Typo>Logout</Typo>
      </Button>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})