import { StyleSheet, View } from 'react-native';

import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from '../forms/ErrorMessage';

function AppFormField({ width, name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
