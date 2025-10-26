import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
        My Calendar
      </Text>
      <Calendar />
    </View>
  );
}
