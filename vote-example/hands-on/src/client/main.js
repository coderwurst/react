import React from 'react';
import ReactDOM from 'react-dom';

import VotingComponent from './components/VotingComponent';
import Layout from './components/Layout';

const vote = {
  title:          'How is your day?',
  description:    'Tell me, how has your day been so far?',
  totalVotes:     20,
  choices:        [
    { id: 'choice 1', title: 'Good', count: 7, percent: 35 },
    { id: 'choice 2', title: 'OK', count: 12, percent: 60 },
    { id: 'choice 3', title: 'not so good', count: 1, percent: 5 }
  ]
};

ReactDOM.render(
    <Layout>
      <VotingComponent vote={vote} />
    </Layout>, document.getElementById('voteAppMountPoint')
);

