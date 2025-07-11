import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Chrome as HomeIcon, Hammer, ArrowRight } from 'lucide-react-native';
import { useAuth } from '../contexts/AuthContext';

const { width } = Dimensions.get('window');

interface LandingScreenProps {
  navigation: any;
}

export default function LandingScreen({ navigation }: LandingScreenProps) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      // Navigation is handled by the main navigator
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Welcome to</Text>
            <Text style={styles.appName}>PatchD</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Built with Bolt.new</Text>
          </View>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Home projects, scoped by AI</Text>
          <Text style={styles.heroSubtitle}>
            Fast, clear quotes for homeowners. Steady, well-scoped work for contractors.
          </Text>
        </View>
      </View>

      {/* Action Cards */}
      <View style={styles.actionSection}>
        <TouchableOpacity 
          style={[styles.actionCard, styles.homeownerCard]} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HomeownerLogin')}
        >
          <View style={styles.cardIcon}>
            <HomeIcon size={32} color="#ffffff" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>I'm a Homeowner</Text>
            <Text style={styles.cardSubtitle}>Get AI-powered project quotes</Text>
          </View>
          <ArrowRight size={24} color="#bfdbfe" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionCard, styles.contractorCard]} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ContractorLogin')}
        >
          <View style={styles.cardIcon}>
            <Hammer size={32} color="#ffffff" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>I'm a Contractor</Text>
            <Text style={styles.cardSubtitle}>Find well-scoped projects</Text>
          </View>
          <ArrowRight size={24} color="#bbf7d0" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by AI • Secured by Stripe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    fontSize: 16,
    color: '#64748b',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 4,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  badge: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: width - 80,
  },
  actionSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    gap: 16,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  homeownerCard: {
    backgroundColor: '#2563eb',
  },
  contractorCard: {
    backgroundColor: '#059669',
  },
  cardIcon: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#94a3b8',
  },
});