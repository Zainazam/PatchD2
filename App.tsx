import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Chrome as Home, User, Settings, Briefcase, Hammer, Search } from 'lucide-react-native';
import * as SplashScreen from 'expo-splash-screen';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useFrameworkReady } from './hooks/useFrameworkReady';

// Import screens
import LandingScreen from './screens/LandingScreen';
import HomeownerLoginScreen from './screens/HomeownerLoginScreen';
import HomeownerSignupScreen from './screens/HomeownerSignupScreen';
import ContractorLoginScreen from './screens/ContractorLoginScreen';
import ContractorSignupScreen from './screens/ContractorSignupScreen';
import HomeownerHomeScreen from './screens/HomeownerHomeScreen';
import HomeownerProjectsScreen from './screens/HomeownerProjectsScreen';
import HomeownerProfileScreen from './screens/HomeownerProfileScreen';
import HomeownerSettingsScreen from './screens/HomeownerSettingsScreen';
import ContractorHomeScreen from './screens/ContractorHomeScreen';
import ContractorProjectsScreen from './screens/ContractorProjectsScreen';
import ContractorJobsScreen from './screens/ContractorJobsScreen';
import ContractorProfileScreen from './screens/ContractorProfileScreen';
import ContractorSettingsScreen from './screens/ContractorSettingsScreen';

const Stack = createNativeStackNavigator();
const HomeownerTab = createBottomTabNavigator();
const ContractorTab = createBottomTabNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function HomeownerTabs() {
  return (
    <HomeownerTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <HomeownerTab.Screen
        name="HomeownerHome"
        component={HomeownerHomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <HomeownerTab.Screen
        name="HomeownerProjects"
        component={HomeownerProjectsScreen}
        options={{
          title: 'Projects',
          tabBarIcon: ({ size, color }) => <Briefcase size={size} color={color} />,
        }}
      />
      <HomeownerTab.Screen
        name="HomeownerProfile"
        component={HomeownerProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
      <HomeownerTab.Screen
        name="HomeownerSettings"
        component={HomeownerSettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => <Settings size={size} color={color} />,
        }}
      />
    </HomeownerTab.Navigator>
  );
}

function ContractorTabs() {
  return (
    <ContractorTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
        },
        tabBarActiveTintColor: '#059669',
        tabBarInactiveTintColor: '#6b7280',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <ContractorTab.Screen
        name="ContractorHome"
        component={ContractorHomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} />,
        }}
      />
      <ContractorTab.Screen
        name="ContractorProjects"
        component={ContractorProjectsScreen}
        options={{
          title: 'Projects',
          tabBarIcon: ({ size, color }) => <Search size={size} color={color} />,
        }}
      />
      <ContractorTab.Screen
        name="ContractorJobs"
        component={ContractorJobsScreen}
        options={{
          title: 'My Jobs',
          tabBarIcon: ({ size, color }) => <Briefcase size={size} color={color} />,
        }}
      />
      <ContractorTab.Screen
        name="ContractorProfile"
        component={ContractorProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => <User size={size} color={color} />,
        }}
      />
      <ContractorTab.Screen
        name="ContractorSettings"
        component={ContractorSettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => <Settings size={size} color={color} />,
        }}
      />
    </ContractorTab.Navigator>
  );
}

function AuthenticatedApp() {
  const { user } = useAuth();
  const role = user?.user_metadata?.role;

  if (role === 'homeowner') {
    return <HomeownerTabs />;
  } else if (role === 'contractor') {
    return <ContractorTabs />;
  }

  return <LandingScreen />;
}

function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Authenticated" component={AuthenticatedApp} />
      ) : (
        <>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="HomeownerLogin" component={HomeownerLoginScreen} />
          <Stack.Screen name="HomeownerSignup" component={HomeownerSignupScreen} />
          <Stack.Screen name="ContractorLogin" component={ContractorLoginScreen} />
          <Stack.Screen name="ContractorSignup" component={ContractorSignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  useFrameworkReady();

  useEffect(() => {
    // Hide splash screen after framework is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}