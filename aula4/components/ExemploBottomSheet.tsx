// import React, { useRef } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const ExemploBottomSheet = () => {
//     const bottomSheetRef = useRef(null);

//     const abrirBottomSheet = () => {
//         bottomSheetRef.current?.expand();
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             <Button title="Abrir Bottom Sheet" onPress={abrirBottomSheet} />
//             <BottomSheet
//                 ref={bottomSheetRef}
//                 index={-1} // inicialmente fechado
//                 snapPoints={['50%', '90%']}
//             >
//                 <View style={styles.content}>
//                     <Text>Este é o conteúdo do Bottom Sheet!</Text>
//                 </View>
//             </BottomSheet>
//         </GestureHandlerRootView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     content: {
//         padding: 20,
//         alignItems: 'center',
//     },
// });

// export default ExemploBottomSheet;
