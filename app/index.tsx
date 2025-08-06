import { Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
      }}
    >
      <Text>My Pandsdsa.</Text>
    </View>
  );
}
