import React from "react";
import { SafeAreaView, Text, TextInput, Pressable, View, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useForm, useFormState } from "react-hook-form";
import { addUser, setUsername, setPassword, resetUsers } from "../reducer/userReducer"; // Ensure the path is correct

const MyFormComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);

  const { control, handleSubmit, setValue, register, reset } = useForm({ defaultValues: { username: '', password: '' } });
  const { isSubmitting } = useFormState({ control });

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset(); // Reset form to initial values
    dispatch(setUsername("")); // Reset username in Redux state
    dispatch(setPassword("")); // Reset password in Redux state
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>User Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => {
            setValue("username", text);
            dispatch(setUsername(text));
          }}
          value={username}
          {...register("username")}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => {
            setValue("password", text);
            dispatch(setPassword(text));
          }}
          value={password}
          {...register("password")}
        />
      </View>
      <Pressable
        style={[
          {
            backgroundColor: (isSubmitting || username=='' || password=='') ? "#9e9e9e" : "#6200ee",
          },
          styles.button,
        ]}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting || username=='' || password==''}
      >
        {isSubmitting ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Submit</Text>}
      </Pressable>
      <View style={styles.listContainer}>
        {users && users.map((user, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{user.username} - {user.password}</Text>
          </View>
        ))}
      </View>
      {users && (
        <Pressable
          style={ [
            {
              backgroundColor: !users.length ? '#9e9e9e' : '#6200ee',
            },
            styles.button,
          ]}
          onPress={() => {
            dispatch(resetUsers());
            reset(); // Reset form state
          }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 5,
    borderRadius: 5,
  },
  listText: {
    fontSize: 16,
  },
});

export default MyFormComponent;
