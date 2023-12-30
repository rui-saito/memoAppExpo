import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Component1() {
  return (
    <View style={styles.brock}>
      <Text style={styles.TitleText}>This is Component!</Text>
      <TextInput
        style={styles.input}
        testID="sampleTextBox"
        defaultValue="テキストボックス"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("aaa");
        }}
      >
        <Text style={styles.buttonText}>ボタン</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  brock: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
  },
  TitleText: {
    justifyContent: "center",
    fontSize: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    borderStyle: "solid",
    width: "80%",
    borderWidth: 1,
    marginTop: 10,
    padding: 8,
  },
});
