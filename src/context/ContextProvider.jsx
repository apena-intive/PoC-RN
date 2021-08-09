import React, { createContext, useReducer, useContext } from 'react';

import { TYPE } from '../constants/Constants';

export const initialState = {
  user: {
    uid: '',
    avatar: '',
    name: '',
    surname: '',
    email: 'testrn@gmail.com',
    gender: '',
    birthDate: '',
  },
  auth: {
    isSigned: false,
  },
  account: {
    balance: 0,
    loading: true,
  },
  transactions: [],
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const reducer = ({ user, auth, account, transactions }, action) => {
  let newState = {
    user: { ...user },
    auth: { ...auth },
    account: { ...account },
    transactions: [...transactions],
  };
  switch (action.type) {
    case TYPE.USER_SIGN_IN:
      newState.auth.isSigned = true;
      newState.user.uid = action.payload.uid;
      newState.user.avatar = action.payload.avatar;
      newState.user.name = action.payload.name;
      newState.user.surname = action.payload.surname;
      newState.user.email = action.payload.email;
      newState.user.gender = action.payload.gender;
      newState.user.birthDate = action.payload.birthDate;
      break;
    case TYPE.USER_UPDATE:
      newState.user.avatar = action.payload.avatar || user.avatar;
      newState.user.name = action.payload.name || user.name;
      newState.user.surname = action.payload.surname || user.surname;
      newState.user.email = action.payload.email || user.email;
      newState.user.gender = action.payload.gender || user.gender;
      newState.user.birthDate = action.payload.birthDate || user.birthDate;
      break;
    case TYPE.USER_LOGOUT:
      newState = initialState;
      break;
    case TYPE.BALANCE_UPDATE:
      newState.account.balance = action.payload.balance;
      newState.account.loading = false;
      break;
    case TYPE.LIST_TRANSACTIONS:
      newState.transactions = [
        ...new Map(
          [...newState.transactions, ...action.payload.transactions].map(
            (item) => [item.docID, item],
          ),
        ).values(),
      ];
      break;
    case TYPE.NEW_MOVEMENTS:
      newState.transactions = [
        ...new Map(
          [...action.payload.transactions, ...newState.transactions].map(
            (item) => [item.docID, item],
          ),
        ).values(),
      ];
      break;
    default:
      break;
  }
  return newState;
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
};

export { ContextProvider, useAppContext };
