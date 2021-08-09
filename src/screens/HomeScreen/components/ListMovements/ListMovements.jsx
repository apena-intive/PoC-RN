import React from 'react';
import { View, FlatList } from 'react-native';

import ItemMov from '../ItemMov/ItemMov';
import { styles } from './styles';
import { useGetListMovs } from '../../hooks/useGetListMovs';
import { useAppContext } from '../../../../context';
import Spinner from '../../../../components/Spinner';

const FooterComponent = ({ loading }) =>
  loading ? <Spinner size="large" color="#000" /> : null;

const ListMovements = () => {
  const {
    state: { transactions },
  } = useAppContext();

  const { handlerGetMore, loading } = useGetListMovs();

  const onEndReached = () =>
    handlerGetMore(transactions[transactions.length - 1].docID);

  return (
    <View style={styles.list}>
      <FlatList
        data={transactions}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        ListFooterComponent={<FooterComponent loading={loading} />}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        renderItem={({ item }) => (
          <ItemMov
            description={item.description}
            date={item.date}
            amount={item.amount.toFixed(2)}
            type={item.type}
          />
        )}
        keyExtractor={(item) => item.docID.toString()}
      />
    </View>
  );
};

export default ListMovements;
