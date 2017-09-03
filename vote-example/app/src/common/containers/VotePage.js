import React, { PropTypes } from 'react';
import VoteList from './../components/VoteList';
import VoteComposer from './../components/VoteComposer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class VotePage extends React.Component {

  componentDidMount() {
    this.props.loadVotes();
  }

  render() {
    this.props.setTitle('Overview - Vote as a Service');
    const {votes} = this.props;
    return (
      <div>
        <VoteList allVotes={votes}/>
        <VoteComposer
          active={false}
          onActivate={ () => this.props.pushPath('/compose') }
        />
      </div>
    );
  }
}
VotePage.propTypes = {
  votes: PropTypes.array.isRequired,
  setTitle: PropTypes.func.isRequired,
  pushPath: PropTypes.func.isRequired,
  loadVotes: PropTypes.func.isRequired
};

import * as Actions from '../actions';

function mapStateToProps(state) {
  return {
    votes: state.votes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const wrappedComponent = connect(mapStateToProps, mapDispatchToProps)(VotePage);
wrappedComponent.preRender = () => Actions.loadVotes();
export default wrappedComponent;
