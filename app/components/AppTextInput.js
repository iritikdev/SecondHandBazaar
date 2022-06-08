import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        selectionColor={defaultStyles.colors.medium}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',

    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
