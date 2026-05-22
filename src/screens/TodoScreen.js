import { TouchableOpacity, View, StyleSheet, FlatList, Text, TextInput } from "react-native";

export default function TodoScreen({ navigation }) {
    // lista fixa
    const TaskList = [
        { id: '1', text: 'Estudar React Native', completed: false },
        { id: '2', text: 'Academia às 18h', completed: true },
        { id: '3', text: 'Ler um livro', completed: true }
    ];
    // função apenas visual para redenrizar cada item
    const renderTodoItem = ({item}) => (
        <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.taskTextContainer}>
                <View style={[
                    styles.circle,
                    item.completed && styles.circleCompleted
                    ]}>

                    {item.completed && (
                    <Text style={styles.checkMark}>✓</Text>
                    )}

                </View>



                <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
                    
                    {item.text}
                    
                </Text>



            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Minhas Tarefas</Text>
                <Text style={styles.subtitle}>1 pendentes</Text>
            </View>
            <FlatList
                data={TaskList}
                renderItem={renderTodoItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Nova Tarefa" placeholderTextColor='#999' />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}






const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2
    },
    taskTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#0066cc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12

    },
    circleCompleted:{
        backgroundColor:'#0066cc',
        borderColor:'#0066cc'
    },
    taskText: {
        fontSize: 16,
        color: '#1a1c1e',
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        paddingTop: 60
    },
    headerContainer: {
        paddingHorizontal: 24,
        marginBottom: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1c1e'
    },
    subtitle: {
        fontSize: 14,
        color: '#6c727f',
        marginTop: 4
    },

    checkMark: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    inputContainer: {
        position: 'absolute',
        bottom: 34,
        left: 24,
        right: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#1a1c1e',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 4,
        marginRight: 12
    },
    addButton:{
        width:52,
        height:52,
        backgroundColor:'#0066cc',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',

        shadowColor:'#000',
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.2,
        shadowRadius:6,
        elevation:4
    },
    addButtonText:{
        color:'#fff',
        fontSize:24,
        fontWeight:'300'
    },

    taskTextCompleted:{
        textDecorationLine:'line-through',
        color:'#999'
    }

})