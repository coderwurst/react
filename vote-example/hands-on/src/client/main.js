import React from 'react';
import ReactDOM from 'react-dom';

import VotingComponent from './components/VotingComponent';
import Layout from './components/Layout';

const vote = {
  title:          'How is your day?',
  description:    'Tell me, how has your day been so far?',
  choices:        [
    { id: 'choice 1', title: 'Good', count: 7 },
    { id: 'choice 2', title: 'OK', count: 12 },
    { id: 'choice 3', title: 'not so good', count: 1 }
  ]
};

ReactDOM.render(
    <Layout>
      <VotingComponent vote={vote} />
    </Layout>, document.getElementById('voteAppMountPoint')
);

