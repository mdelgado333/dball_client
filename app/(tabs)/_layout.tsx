import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="today"
      options={{
        title: 'Today',
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
        />
      <Tabs.Screen
      name="(explore)"
      options={{
        title: 'Explore',
        headerShown: false,

        tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color}/>
        }}
      />
      <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,

        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>
        }}
      />
    </Tabs>
  )
}
