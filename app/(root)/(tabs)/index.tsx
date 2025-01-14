import { Link } from 'expo-router';
import { View, Text } from 'react-native'


export default function Index() {
    return (
        <View
        style={{
            flex:2,
            justifyContent: "flex-start",
            alignItems: "center"
        }}
        >
            <Text className='text-2xl text-green-500 font-bold my-10 font-rubik'>Welcome to Bangladesh</Text>
            <Link className='bg-red-600 text-white rounded p-2' href='/sign-in'>Sign In</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/profile'>Profile</Link>
            <Link href='/properties/1'>Property</Link>
        </View>
    );
}