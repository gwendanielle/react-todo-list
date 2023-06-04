import styles from "./style";
import React from "react";
import {Button, View, Text} from "react-native";

const ToDoRow = ({todo, handleUpdateTodo, handleDeleteTodo}) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.todoText}>{todo?.item}</Text>
            <View style={styles.buttonsView}>
                <Button
                    title="Update"
                    onPress={() => handleUpdateTodo(todo?.id)}
                />
                <View style={styles.space} />
                <Button
                    title="Delete"
                    color="#E8212B"
                    onPress={() => handleDeleteTodo(todo?.id)}
                />
            </View>
        </View>
    );
}

export default ToDoRow