import React from 'react';
import ReactDOM from 'react-dom';

import ChoiceBar from './components/ChoiceBar';

ReactDOM.render(
    <ChoiceBar title='JavaScript' count={ 123 } percent={ 37 } />,
    document.getElementById('voteAppMountPoint')
  );