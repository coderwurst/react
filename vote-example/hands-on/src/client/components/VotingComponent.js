import React from 'react';

export default class VotingComponent extends React.Component {
    render () {
        const { vote } = this.props;
        return(
            <div className="Row VotingRow Spacer">
                <div className="Head">
                    <h1 className="Title">{vote.title}
                        <div className="Badge">{vote.totalVotes}</div>
                    </h1>
                    <div className="Description Emphasis">
                        {vote.description}
                    </div>
                </div>
            </div>
        );
    }
}

VotingComponent.propTypes = {
    vote: React.PropTypes.object.isRequired
}