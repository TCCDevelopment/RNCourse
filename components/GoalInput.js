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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              disabled={addGoalBtnState}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
