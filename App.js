import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto, {color:'blue'}]}><b>Gustavo Gabriel Cunha Manhães</b></Text>
      <Text style={[styles.notebook, {color:'black'}]}><b>19</b></Text>      
      <Text style={[styles.sala, {color:'red'}]}><b>Turma: I2HN</b></Text>     
      <Text style={[styles.sala, {color:'red'}]}><b>Sala: 7</b></Text>     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    weight: '100%',
  },
  texto: {
    fontSize: 30,
    left: '30%', 
  },
  notebook: {
    fontSize: 25,
    fontStyle: 'italic',
    right: '30%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    top: '25%',
  },
  sala: {
    backgroundColor: 'pink',
    fontSize: 20,
  }
  },

);
