import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Register' }} />
      <Stack.Screen name="review" options={{ title: 'Review' }} />
      <Stack.Screen name="success" options={{ title: 'Success' }} />
    </Stack>
  );
}