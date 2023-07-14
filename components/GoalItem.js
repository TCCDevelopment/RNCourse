import { View, StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={ ({pressed}) => pressed && styles.pressedItem }
        android_ripple={{ color: "#2F0665" }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
