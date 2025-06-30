import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Search, Hammer, DollarSign, Clock, TrendingUp } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function ContractorHomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.user_metadata?.name || 'Contractor'}</Text>
        </View>
        <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <TouchableOpacity style={styles.primaryAction} activeOpacity={0.8}>
          <View style={styles.actionIcon}>
            <Search size={24} color="#ffffff" />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Browse Projects</Text>
            <Text style={styles.actionSubtitle}>Find new opportunities</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Dashboard Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Performance</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Clock size={20} color="#d97706" />
            </View>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Active Jobs</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Hammer size={20} color="#059669" />
            </View>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <DollarSign size={20} color="#2563eb" />
            </View>
            <Text style={styles.statNumber}>$85K</Text>
            <Text style={styles.statLabel}>Total Earned</Text>
          </View>
        </View>
      </View>

      {/* Performance Metrics */}
      <View style={styles.metricsSection}>
        <Text style={styles.sectionTitle}>This Month</Text>
        
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricTitle}>Revenue</Text>
            <View style={styles.trendBadge}>
              <TrendingUp size={16} color="#059669" />
              <Text style={styles.trendText}>+12%</Text>
            </View>
          </View>
          <Text style={styles.metricValue}>$12,450</Text>
        </View>
        
        <View style={styles.metricCard}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricTitle}>Projects Won</Text>
            <View style={styles.trendBadge}>
              <TrendingUp size={16} color="#059669" />
              <Text style={styles.trendText}>+8%</Text>
            </View>
          </View>
          <Text style={styles.metricValue}>6 projects</Text>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>New project inquiry received</Text>
          <Text style={styles.activityTime}>1 hour ago</Text>
        </View>
        
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Kitchen renovation completed</Text>
          <Text style={styles.activityTime}>2 days ago</Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  signOutButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  signOutText: {
    fontSize: 14,
    color: '#64748b',
  },
  quickActions: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  primaryAction: {
    backgroundColor: '#059669',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  statsSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  metricsSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  metricCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricTitle: {
    fontSize: 16,
    color: '#64748b',
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  trendText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '600',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  activitySection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 14,
    color: '#64748b',
  },
});