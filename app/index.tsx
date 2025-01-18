import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import icon from '../assets/icons/car-park.png';
import headImage from '@/assets/images/head.png';
import { Link } from 'expo-router';

const index = () => {
    return (
        <View>
            <View className='relative'>
                <Image source={headImage} />
                <Text className='absolute text-white font-rubik-bold text-3xl top-[60px] w-full text-center'>Hello Dinajpur</Text>
                <Text className='absolute text-white font-rubik top-[100px] w-full text-center px-10 leading-6'>Find your desired information and contact information using this app. {'\n'} Thanks for using this app</Text>
            </View>
            <ScrollView className=''>
                <View className='flex flex-row justify-between gap-5 mx-5 mb-5'>
                    <View className='grow bg-primary-200 rounded-lg p-5'>
                        <Link href='/govt' className=' flex flex-col items-center justify-center'>
                            <Image source={icon} />
                            <Text>Ambulance</Text>
                        </Link>
                    </View>
                    <View className='grow bg-primary-200 rounded-lg p-5'>
                        <Link href='/' className=' flex flex-col items-center justify-center'>
                            <Image source={icon} />
                            <Text>Ambulance</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default index