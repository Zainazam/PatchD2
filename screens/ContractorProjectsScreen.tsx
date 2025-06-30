import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search, MapPin, DollarSign, Clock } from 'lucide-react-native';

const mockProjects = [
  {
    id: 1,
    title: 'Kitchen Renovation',
    location: 'San Francisco, CA',
    budget: '$15,000 - $20,000',
    timeframe: '4-6 weeks',
    description: 'Complete kitchen remodel including cabinets, countertops, and appliances.',
    postedTime: '2 hours ago',
  },
  {
    id: 2,
    title: 'Bathroom Remodel',
    location: 'Oakland, CA',
    budget: '$8,000 - $12,000',
    timeframe: '2-3 weeks',
    description: 'Master bathroom renovation with new tile, fixtures, and vanity.',
    postedTime: '5 hours ago',
  },
  {
    id: 3,
    title: 'Deck Construction',
    location: 'Berkeley, CA',
    budget: '$5,000 - $8,000',
    timeframe: '1-2 weeks',
    description: 'Build new wooden deck in backyard, approximately 200 sq ft.',
    postedTime: '1 day ago',
  },
];

export default function ContractorProjectsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Browse Projects</Text>
        <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
          <Search size={20} color="#059669" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Filter Section */}
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
            <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
              <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Kitchen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Bathroom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Outdoor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterText}>Flooring</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Projects List */}
        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>Available Projects</Text>
          
          {mockProjects.map((project) => (
            <TouchableOpacity key={project.id} style={styles.projectCard} activeOpacity={0.8}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.postedTime}>{project.postedTime}</Text>
              </View>
              
              <Text style={styles.projectDescription}>{project.description}</Text>
              
              <View style={styles.projectDetails}>
                <View style={styles.detailItem}>
                  <MapPin size={16} color="#64748b" />
                  <Text style={styles.detailText}>{project.location}</Text>
                </View>
                
                <View style={styles.detailItem}>
                  <DollarSign size={16} color="#059669" />
                  <Text style={styles.detailText}>{project.budget}</Text>
                </View>
                
                <View style={styles.detailItem}>
                  <Clock size={16} color="#d97706" />
                  <Text style={styles.detailText}>{project.timeframe}</Text>
                </View>
              </View>
              
              <TouchableOpacity style={styles.bidButton} activeOpacity={0.8}>
                <Text style={styles.bidButtonText}>Submit Proposal</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
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
  searchButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  content: {
    flex: 1,
  },
  filterSection: {
    paddingVertical: 16,
  },
  filterScroll: {
    paddingHorizontal: 20,
  },
  filterChip: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  filterChipActive: {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
  filterText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  projectsSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
    marginRight: 12,
  },
  postedTime: {
    fontSize: 12,
    color: '#64748b',
  },
  projectDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  projectDetails: {
    gap: 8,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#1e293b',
  },
  bidButton: {
    backgroundColor: '#059669',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bidButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});