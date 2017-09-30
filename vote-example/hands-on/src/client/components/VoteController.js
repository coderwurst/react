import React from 'react';
import VoteList from './VoteList';
import VoteComposer from './VoteComposer';
import { fetchJson } from '../backend/Backend';

export default class VoteController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allVotes: []
    };

    this.setCurrentVote = this.setCurrentVote.bind(this);
    this.registerVote = this.registerVote.bind(this);
    this.addVote = this.addVote.bind(this);
    this.activateVoteComposer = this.activateVoteComposer.bind(this);
    this.deactivateVoteComposer = this.deactivateVoteComposer.bind(this);
  }

  componentDidMount() {
    fetchJson('/api/votes').then(allVotes => {
      this.setState({
        allVotes
      });
    });
  }

  setCurrentVote(vote) {
    const { composerActive } = this.state;
    this.setState({currentVoteId: vote && !composerActive ? vote.id : null});
  }

  registerVote(vote, choice) {
    sendJson('put',
    'api/votes/${vote.id}/choices/${choice.id}/vote',{}
    ).then(updatedVote => {
      const newAllVotes =
        this.state.allVotes.map
          (vote => vote.id === updatedVote.id ? updatedVote : vote);
        this.setState({allVotes: newAllVotes});
        this.setCurrentVote(updatedVote);
    });
  }

  addVote(vote) {
    const { allVotes } = this.state;
    this.setState({allVotes: [...allVotes, vote]});
  }

  activateVoteComposer() {
    this.setState({
      currentVoteId:  null,
      composerActive: true
    });
  }

  deactivateVoteComposer() {
    this.setState({
      composerActive: false
    });
  }

  render() {
    const { allVotes, currentVoteId, composerActive } = this.state;

    return (
      <div>
        <VoteList allVotes={allVotes}
                  currentVoteId={currentVoteId}
                  onSelectVote={this.setCurrentVote}
                  onDismissVote={()=>{this.setCurrentVote(null)}}
                  onRegisterVote={this.registerVote}
        />
        <VoteComposer active={composerActive}
                      onDeactivate={this.deactivateVoteComposer}
                      onActivate={this.activateVoteComposer}
                      onSave={this.addVote}/>
      </div>
    );
  }
}
