import React from 'react';
import { View, Text } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { DepositSchema } from '../../../validation/FormSchemas';
import FlexButton from '../../../components/Buttons';
import Colors from '../../../constants/Colors';
import { styles } from './styles';
import InputCurrency from '../../../components/InputCurrency';
import { useDeposit } from '../hooks/useDeposit';
import { SCREEN_NAMES } from '../../../constants/Constants';

const DepositFounds = () => {
  const { loading } = useDeposit();
  const { navigate } = useNavigation();

  const methods = useForm({
    defaultValues: { amount: '' },
    resolver: yupResolver(DepositSchema),
  });

  const { handleSubmit, reset } = methods;

  const handlePress = (values) => {
    reset();
    navigate(SCREEN_NAMES.PASSWORDDEPOSITS, { dataDeposit: values });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How much do you want to deposit?</Text>
      <FormProvider {...methods}>
        <View>
          <InputCurrency
            name="amount"
            placeholder="Amount: $0.00"
            keyboardType="numeric"
            prefix="$"
            delimiter=","
            separator="."
            precision={2}
            minValue={0}
            required
          />
          <FlexButton
            color={Colors.primary}
            text="DEPOSIT"
            isLoading={loading}
            disabled={loading}
            onPress={handleSubmit(handlePress)}
          />
        </View>
      </FormProvider>
    </View>
  );
};

export default DepositFounds;
