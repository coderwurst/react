import React from 'react';

export default function ChoiceBar( {title, count, percent, onClickHandler} ) {
    return <div className="ChoiceBar">
        <div className="Progress" style={{'width' : percent + '%'}} >    
            <div className="ChoiceBarTitle">{title}</div>
        </div>
        <div className="ChoiceBarBadge" onClick={onClickHandler} >{count}</div>
    </div>;
}

ChoiceBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    percent: React.PropTypes.number.isRequired,
    onClickHandler: React.PropTypes.func.isRequired
};