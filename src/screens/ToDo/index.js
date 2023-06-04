import React, {useState} from 'react';
import {Alert, Button, FlatList, Text, TextInput, View,} from 'react-native';
import styles from './style';
import ToDoRow from "../../components/ToDoRow/index.js";

// initial data
const sampleData = [
    {
        id: 'jogging-0',
        item: 'Jogging'
    },
    {
        id: 'running-1',
        item: 'Running'
    },
]

const ToDo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(sampleData);

    const handleChangeText = (text) => {
        setTodo(text ?? '');
    }

    const handleAddTodo = () => {
        if (todo.length > 0) {
            const newTodo = {
                id: todo + '-' +todos.length + 1,
                item: todo,
            };
            setTodos([...todos, newTodo]);
            setTodo('');
        }
    };

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter(data => data.id !== id);
        setTodos(filteredTodos);
    };

    const handleUpdateTodo = (id) => {
        const filteredTodos = todos.find(data => data.id === id);
        Alert.prompt(
            'Update',
            filteredTodos.item,
            (text) => handleSubmitUpdate(text, id),
            'plain-text'
        )
    }

    const handleSubmitUpdate = (text, id) => {
        const index = todos.findIndex(data => data.id === id);
        todos[index].item = text;
        setTodos([...todos]);
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add todo"
                onChangeText={handleChangeText}
                value={todo}
            />
            <Button title="Add" onPress={handleAddTodo} />
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={data => data.id}
                renderItem={({ item }) => <ToDoRow todo={item}
                                                   handleUpdateTodo={handleUpdateTodo}
                                                   handleDeleteTodo={handleDeleteTodo} />}
            />
        </View>
    );
}

export default ToDo;