import React, {createContext, useEffect, useState} from 'react';

export const StateContext = createContext({
  showDonate: false,
  showDetail: false,
  donate: () => {},
  detail: () => {},
});

const StateContextProvider = ({children}) => {
  const [showDonate, setShowDonate] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const donate = () => {
    setShowDonate(true);
  };

  const detail = () => {
    setShowDetail(() => true);
    console.log('detail');
    console.log(showDetail);
  };
  const value = {
    showDonate: showDonate,
    showDetail: showDetail,
    donate: donate,
    detail: detail,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
