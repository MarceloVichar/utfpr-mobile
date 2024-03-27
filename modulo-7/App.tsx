import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-yellow-500 p-4 pt-12">
            <View className="flex-1 flex-col w-full bg-white p-6 rounded-lg shadow-lg items-center justify-between">
                <View className="flex flex-col items-center">
                    <Image source={require('./assets/logo-min.png')} className="w-24 h-24"/>
                    <Text className="text-sm">Ministério da educação</Text>
                    <Text className="text-sm">Universidade Tecnológica Federal do Paraná</Text>
                </View>
                <View className="flex flex-col items-center">
                    <Image source={require('./assets/manoel.jpg')} className="w-40 h-40 mb-4"/>
                    <Text className="text-3xl text-center font-bold">Aluno Manoel Jardim Gomes</Text>
                    <Text className="text-2xl text-center">Curso Superior De Tecnologia Em Sistemas Para Internet</Text>
                    <Text className="text-xs">6º período</Text>
                    <Text className="text-2xl text-center">Guarapuava</Text>
                    <Text className="text-xs">Validade: 13/07/2024</Text>
                </View>
                <View className="flex flex-col items-center">
                    <Image source={require('./assets/codigo.png')} className="object-cover h-24 w-32"/>
                    <Text>01234567</Text>
                </View>
            </View>
            <TouchableOpacity
                className="absolute bottom-6 right-2 bg-purple-400 rounded-full h-16 w-16 flex justify-center items-center">
                <Ionicons name="time-outline" size={32} color="white"/>
            </TouchableOpacity>
        </View>
    );
}
