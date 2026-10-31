import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen() {
  const router = useRouter();
  const { userName, email, phoneNumber, age } = useLocalSearchParams();

  const handleConfirm = () => {
    const ageNumber = parseInt(age);

    if (ageNumber < 18) {
      Alert.alert('Age Restriction', 'You must be 18 or older to proceed.');
      return;
    }

    router.push({
      pathname: '/success',
      params: { userName },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <View style={styles.card}>
        <Text style={styles.detail}>Username: {userName}</Text>
        <Text style={styles.detail}>Email: {email}</Text>
        <Text style={styles.detail}>Phone: {phoneNumber || 'Not provided'}</Text>
        <Text style={styles.detail}>Age: {age}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Info" color="red" onPress={() => router.back()} />
        <Button title="Confirm & Submit" onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', maxWidth: 500, width: '100%', alignSelf: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 8, marginBottom: 20 },
  detail: { fontSize: 16, marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});