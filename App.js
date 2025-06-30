import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <StatusBar style="dark" />
      
      {/* Bolt.new Badge - Top Right */}
      <View className="absolute top-12 right-4 z-10">
        <View className="bg-black px-3 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">Built with Bolt.new</Text>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-6">
        {/* Hero Section */}
        <View className="items-center mb-12">
          <Text className="text-4xl font-bold text-gray-900 text-center mb-4 leading-tight">
            PatchD
          </Text>
          <Text className="text-xl text-gray-600 text-center mb-2">
            Home projects, scoped by AI.
          </Text>
          <Text className="text-base text-gray-500 text-center max-w-sm">
            Fast, clear quotes for homeowners. Steady, well-scoped work for contractors.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full max-w-sm space-y-4">
          <TouchableOpacity 
            className="bg-blue-600 py-4 px-8 rounded-xl shadow-lg active:bg-blue-700"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-semibold text-center">
              I'm a Homeowner
            </Text>
            <Text className="text-blue-100 text-sm text-center mt-1">
              Get AI-powered project quotes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-green-600 py-4 px-8 rounded-xl shadow-lg active:bg-green-700"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-semibold text-center">
              I'm a Contractor
            </Text>
            <Text className="text-green-100 text-sm text-center mt-1">
              Find well-scoped projects
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="absolute bottom-8">
          <Text className="text-gray-400 text-sm text-center">
            Powered by AI • Secured by Stripe
          </Text>
        </View>
      </View>
    </View>
  );
}