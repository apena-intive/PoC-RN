/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import FlexButton from '../../../../components/Buttons';
import Spinner from '../../../../components/Spinner';
import InputCurrency from '../../../../components/InputCurrency';
import OptionSelect from '../../../../components/OptionSelect';
import Colors from '../../../../constants/Colors';
import { styles } from './styles';
import { useGetAllUsers, useWithdraw } from '../../hooks';
import { BalanceSchema } from '../../../../validation/FormSchemas';
import { useAppContext } from '../../../../context';
import { SCREEN_NAMES } from '../../../../constants/Constants';

const TransferFounds = () => {
  const {
    state: {
      account: { balance },
    },
  } = useAppContext();
  const { navigate } = useNavigation();
  const { loading: allUsersLoading, data: allUsers } = useGetAllUsers();

  const schema = BalanceSchema(balance);
  const methods = useForm({
    defaultValues: { amount: '', receiverData: '' },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = methods;
  const { loading } = useWithdraw(reset);

  const handlePress = (values) => {
    reset();
    navigate(SCREEN_NAMES.PASSWORDWITHDRAW, { dataTransfer: values });
  };

  if (allUsersLoading) {
    return (
      <View style={styles.container}>
        <Spinner size="large" color={Colors.black} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amount to transfer</Text>
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
        </View>
        <View style={styles.picker}>
          <Text style={styles.text}>Receiver</Text>
          <OptionSelect name="receiverData" options={allUsers} />
          <View>
            <FlexButton
              color={Colors.primary}
              text="TRANSFER"
              isLoading={loading}
              disabled={loading}
              onPress={handleSubmit(handlePress)}
            />
          </View>
        </View>
      </FormProvider>
    </View>
  );
};

export default TransferFounds;
