import { useState } from "react";
import { View, StyleSheet, Modal, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [addGoalBtnState, setAddGoalBtnDisabled] = useState(true);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    updateAddGoalBtn(enteredText);
  }

  function updateAddGoalBtn(enteredText) {
    enteredText.trim() == ""
      ? setAddGoalBtnDisabled(true)
      : setAddGoalBtnDisabled(false);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText.trim());
    enteredText = "";
    setEnteredGoalText(enteredText);
    updateAddGoalBtn(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          disabled={addGoalBtnState}
        />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
