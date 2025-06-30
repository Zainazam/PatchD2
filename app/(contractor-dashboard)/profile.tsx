import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CreditCard as Edit, MapPin, Phone, Mail, Star, Award, Briefcase } from 'lucide-react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function ContractorProfileScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
          <Edit size={20} color="#059669" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' }}
            style={styles.avatar}
          />
          <View style={styles.verifiedBadge}>
            <Award size={16} color="#ffffff" />
          </View>
        </View>
        
        <Text style={styles.userName}>{user?.user_metadata?.name || 'Contractor'}</Text>
        <Text style={styles.userType}>Licensed Contractor</Text>
        {user?.user_metadata?.company && (
          <Text style={styles.companyName}>{user.user_metadata.company}</Text>
        )}
        
        <View style={styles.ratingContainer}>
          <Star size={16} color="#f59e0b" fill="#f59e0b" />
          <Text style={styles.rating}>4.9</Text>
          <Text style={styles.reviewCount}>(47 reviews)</Text>
        </View>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <View style={styles.contactItem}>
          <Mail size={20} color="#64748b" />
          <Text style={styles.contactText}>{user?.email || 'email@example.com'}</Text>
        </View>
        
        <View style={styles.contactItem}>
          <Phone size={20} color="#64748b" />
          <Text style={styles.contactText}>(555) 987-6543</Text>
        </View>
        
        <View style={styles.contactItem}>
          <MapPin size={20} color="#64748b" />
          <Text style={styles.contactText}>San Francisco Bay Area</Text>
        </View>
      </View>

      {/* Business Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Business Performance</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>47</Text>
            <Text style={styles.statLabel}>Projects Completed</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$285K</Text>
            <Text style={styles.statLabel}>Total Revenue</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Active Projects</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>96%</Text>
            <Text style={styles.statLabel}>Client Satisfaction</Text>
          </View>
        </View>
      </View>

      {/* Specialties */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specialties</Text>
        
        <View style={styles.specialtiesContainer}>
          <View style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>Kitchen Renovation</Text>
          </View>
          <View style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>Bathroom Remodel</Text>
          </View>
          <View style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>Flooring</Text>
          </View>
          <View style={styles.specialtyTag}>
            <Text style={styles.specialtyText}>Outdoor Decks</Text>
          </View>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        
        <View style={styles.activityItem}>
          <View style={styles.activityDot} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Kitchen Project Completed</Text>
            <Text style={styles.activityTime}>1 day ago</Text>
          </View>
        </View>
        
        <View style={styles.activityItem}>
          <View style={styles.activityDot} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>New Project Proposal Submitted</Text>
            <Text style={styles.activityTime}>3 days ago</Text>
          </View>
        </View>
        
        <View style={styles.activityItem}>
          <View style={styles.activityDot} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>Client Review Received</Text>
            <Text style={styles.activityTime}>1 week ago</Text>
          </View>
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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  editButton: {
    padding: 8,
  },
  profileSection: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#059669',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  userType: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '600',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  reviewCount: {
    fontSize: 14,
    color: '#64748b',
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#1e293b',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  statItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  specialtyTag: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  specialtyText: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '500',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    gap: 12,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#059669',
    marginTop: 6,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    color: '#64748b',
  },
});