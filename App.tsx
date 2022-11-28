import React from 'react';
import {Provider} from 'react-redux';
import Main from './navigator/main';
import mystore from './redux/store/store';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default App;
