import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react-native';

const mockJobs = [
  {
    id: 1,
    title: 'Kitchen Renovation',
    client: 'Sarah Johnson',
    status: 'in-progress',
    budget: '$18,500',
    progress: 75,
    deadline: 'Dec 15, 2024',
  },
  {
    id: 2,
    title: 'Bathroom Remodel',
    client: 'Mike Chen',
    status: 'completed',
    budget: '$9,200',
    progress: 100,
    deadline: 'Nov 30, 2024',
  },
  {
    id: 3,
    title: 'Deck Installation',
    client: 'Lisa Rodriguez',
    status: 'pending',
    budget: '$6,800',
    progress: 0,
    deadline: 'Jan 10, 2025',
  },
];

export default function ContractorJobsScreen() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} color="#059669" />;
      case 'in-progress':
        return <Clock size={20} color="#d97706" />;
      case 'pending':
        return <AlertCircle size={20} color="#dc2626" />;
      default:
        return <Clock size={20} color="#6b7280" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#dcfce7';
      case 'in-progress':
        return '#fef3c7';
      case 'pending':
        return '#fee2e2';
      default:
        return '#f3f4f6';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#059669';
      case 'in-progress':
        return '#d97706';
      case 'pending':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Jobs</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Active Jobs</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>$34.5K</Text>
            <Text style={styles.statLabel}>Total Value</Text>
          </View>
        </View>

        {/* Jobs List */}
        <View style={styles.jobsSection}>
          <Text style={styles.sectionTitle}>Current Jobs</Text>
          
          {mockJobs.map((job) => (
            <TouchableOpacity key={job.id} style={styles.jobCard} activeOpacity={0.8}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(job.status) }]}>
                  {getStatusIcon(job.status)}
                  <Text style={[styles.statusText, { color: getStatusTextColor(job.status) }]}>
                    {job.status.replace('-', ' ')}
                  </Text>
                </View>
              </View>
              
              <View style={styles.jobDetails}>
                <Text style={styles.clientName}>Client: {job.client}</Text>
                <Text style={styles.deadline}>Due: {job.deadline}</Text>
              </View>
              
              <View style={styles.jobFooter}>
                <Text style={styles.jobBudget}>{job.budget}</Text>
                {job.status === 'in-progress' && (
                  <Text style={styles.progressText}>{job.progress}% Complete</Text>
                )}
              </View>
              
              {job.status === 'in-progress' && (
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${job.progress}%` }]} />
                  </View>
                </View>
              )}
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
  addButton: {
    backgroundColor: '#059669',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
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
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  jobsSection: {
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  jobCard: {
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
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  clientName: {
    fontSize: 14,
    color: '#64748b',
  },
  deadline: {
    fontSize: 14,
    color: '#64748b',
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobBudget: {
    fontSize: 16,
    fontWeight: '600',
    color: '#059669',
  },
  progressText: {
    fontSize: 12,
    color: '#64748b',
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#059669',
    borderRadius: 3,
  },
});