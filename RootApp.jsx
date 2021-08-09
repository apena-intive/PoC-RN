import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { useAppContext } from './src/context';
import AppNavigation from './src/navigation/AppNavigation';
import { TYPE } from './src/constants/Constants';

const RootApp = () => {
  const { dispatch } = useAppContext();
  const db = firebase.firestore();

  useEffect(() => {
    const { uid } = firebase.auth().currentUser;
    const unsubscribe = db
      .collection('Accounts')
      .doc(uid)
      .onSnapshot((doc) => {
        const data = doc.data();
        dispatch({
          type: TYPE.BALANCE_UPDATE,
          payload: data || { balance: 0 },
        });
      });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const { uid } = firebase.auth().currentUser;
    const timestamp = firebase.firestore.Timestamp.now();
    const unsubscribe = db
      .collection('Accounts')
      .doc(uid)
      .collection('Transactions')
      .orderBy('created')
      .startAt(timestamp)
      .onSnapshot((coll) => {
        const newDocs = coll.docs.map((doc) => ({
          ...doc.data(),
          docID: doc.id,
        }));

        const formatedData = newDocs.map((mov) => ({
          description: `${mov.foreingData.name} ${mov.foreingData.surname}`,
          docID: mov.docID,
          amount: mov.amount,
          date: mov.date,
          type: mov.type,
        }));

        dispatch({
          type: TYPE.NEW_MOVEMENTS,
          payload: { transactions: formatedData.reverse() || [] },
        });
      });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AppNavigation />;
};

export default RootApp;
