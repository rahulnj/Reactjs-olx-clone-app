import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Context, { FirebaseContext } from './store/Context'
import { app } from './firebase/config';

ReactDOM.render(

  <FirebaseContext.Provider value={{ app }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
  , document.getElementById('root')
);

