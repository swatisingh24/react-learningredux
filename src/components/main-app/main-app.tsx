import React from 'react';
import { Provider } from 'react-redux';
import { appStore } from '../../store';
import ConnectedCrmSystemComponent from '../crmsystem/crmsystem-component';

function MainApp() {
  return (
    <Provider store={appStore}>
      <ConnectedCrmSystemComponent />
    </Provider>
  );
}

export default MainApp;
