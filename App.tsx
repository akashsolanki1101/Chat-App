import React from 'react';

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import {ThemeManager} from './components/themeManager/themeManager'
import {Wrapper} from './components/layoutWrapper/wrapper'
import userInfoReducer from './store/reducers/userInfo'

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure({
  ...config,
  Analytics:{
    disabled:true
  },

})

const App = ()=>{
  const store = createStore(userInfoReducer)

  return (
    <Provider
      store={store}
    >
      <ThemeManager>
        <Wrapper/>
      </ThemeManager>
    </Provider>
  );
}

export default withAuthenticator(App)


