import React from 'react';

export default function ChoiceBar( {title, count, percent} ) {
    return <div className="ChoiceBar">
        <div className="Progress" style={{'width' : '37%'}} >    
            <div className="ChoiceBarTitle">JavaScript</div>
        </div>
        <div className="ChoiceBarBadge">123</div>
    </div>;
}

ChoiceBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    percent: React.PropTypes.number.isRequired
};