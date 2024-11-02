import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExemploActivityIndicator from './components/ExemploActivityIndicator';
import ExemploRefreshControl from './components/ExemploRefreshControl';
import ExemploFlatList from './components/ExemploFlatList';
import ExemploSwitch from './components/ExemploSwitch';
import ExemploSlider from './components/ExemploSlider';
import ExemploModal from './components/ExemploModal';
import ExemploAlert from './components/ExemploAlert';
import ExemploDatePicker from './components/ExemploDatePicker';
import ExemploImagePicker from './components/ExemploImagePicker';
import ExemploSwipeable from './components/ExemploSwipeable';
import ExemploToast from './components/ExemploToast';
import ExemploAnimated from './components/ExemploAnimated';
import ExemploPressable from './components/ExemploPressable';
import ExemploSwitchSelector from './components/ExemploSwitchSelector';
//import ExemploBottomSheet from './components/ExemploBottomSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <ExemploSwipeable></ExemploSwipeable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
