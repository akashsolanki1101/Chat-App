import React from 'react';

import {ThemeManager} from './components/themeManager/themeManager'
import {Wrapper} from './components/layoutWrapper/wrapper'


import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

const App = ()=>{
  return (
    <ThemeManager>
      <Wrapper/>
    </ThemeManager>
  );
}

export default withAuthenticator(App)


