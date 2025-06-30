import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Bell, Shield, CreditCard, CircleHelp as HelpCircle, LogOut, ChevronRight, Moon, Globe, Smartphone } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const SettingItem = ({ 
    icon, 
    title, 
    subtitle, 
    onPress, 
    showArrow = true, 
    rightComponent 
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    showArrow?: boolean;
    rightComponent?: React.ReactNode;
  }) => (
    <TouchableOpacity 
      style={styles.settingItem} 
      onPress={onPress}
      activeOpacity={0.8}
      disabled={!onPress}
    >
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.settingRight}>
        {rightComponent}
        {showArrow && !rightComponent && (
          <ChevronRight size={20} color="#94a3b8" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <SettingItem
          icon={<Shield size={20} color="#2563eb" />}
          title="Privacy & Security"
          subtitle="Manage your account security"
          onPress={() => {}}
        />
        
        <SettingItem
          icon={<CreditCard size={20} color="#059669" />}
          title="Payment Methods"
          subtitle="Manage cards and billing"
          onPress={() => {}}
        />
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <SettingItem
          icon={<Bell size={20} color="#f59e0b" />}
          title="Notifications"
          subtitle="Push notifications and alerts"
          showArrow={false}
          rightComponent={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#e2e8f0', true: '#bfdbfe' }}
              thumbColor={notificationsEnabled ? '#2563eb' : '#94a3b8'}
            />
          }
        />
        
        <SettingItem
          icon={<Moon size={20} color="#6366f1" />}
          title="Dark Mode"
          subtitle="Toggle dark theme"
          showArrow={false}
          rightComponent={
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#e2e8f0', true: '#bfdbfe' }}
              thumbColor={darkModeEnabled ? '#2563eb' : '#94a3b8'}
            />
          }
        />
        
        <SettingItem
          icon={<Globe size={20} color="#10b981" />}
          title="Language"
          subtitle="English (US)"
          onPress={() => {}}
        />
        
        <SettingItem
          icon={<Smartphone size={20} color="#8b5cf6" />}
          title="App Preferences"
          subtitle="Customize your experience"
          onPress={() => {}}
        />
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <SettingItem
          icon={<HelpCircle size={20} color="#06b6d4" />}
          title="Help Center"
          subtitle="FAQs and support articles"
          onPress={() => {}}
        />
        
        <SettingItem
          icon={<Bell size={20} color="#f97316" />}
          title="Contact Support"
          subtitle="Get help from our team"
          onPress={() => {}}
        />
      </View>

      {/* App Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        
        <View style={styles.appInfo}>
          <Text style={styles.appName}>PatchD</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.appDescription}>
            Home projects, scoped by AI. Fast, clear quotes for homeowners. 
            Steady, well-scoped work for contractors.
          </Text>
        </View>
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <LogOut size={20} color="#dc2626" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by AI • Secured by Stripe</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 12,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appInfo: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  appDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#dc2626',
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#94a3b8',
  },
});