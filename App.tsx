import React from 'react';

import {ThemeManager} from './components/themeManager/themeManager'
import {Wrapper} from './components/wrapper/wrapper'

const App = ()=>{
  return (
    <ThemeManager>
      <Wrapper/>
    </ThemeManager>
  );
}

export default App


