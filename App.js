import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import { globalStyles } from './styles/global';
import Loading from './pages/loading';
import Home from './pages/loading';

export default function App() {
  return (
    <ScrollView style={globalStyles.container}>
      <Loading/>
      {/* <StatusBar style="auto" /> */}
      <View>
      <Home/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
