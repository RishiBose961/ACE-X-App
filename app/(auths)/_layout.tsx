import { Tabs } from 'expo-router';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          textAlign: 'center',
          color: 'blue', 
        },
        tabBarIcon: () => null, 
        tabBarStyle: { height: 80 },
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          headerTitle: 'ACE-X Login',
          tabBarLabel: 'LOGIN', // Custom label for the "login" tab
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          headerTitle: 'ACE-X Register',
          tabBarLabel: 'REGISTER', // Custom label for the "register" tab
        }}
      />
    </Tabs>
  );
}
