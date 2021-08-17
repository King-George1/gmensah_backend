import React from 'react';
import './QuestionComponentStyle.css';

export const QuestionComponent = (props) => {
    
    return(
        <div className="questionItem">
            <p id="questionTitle">{props.questionTitle}</p>
            <p id="questionBody">
                {props.questionBody}
            </p>
            <div className="questionTags">
            {/* {
                props.questionTags.map(tagId => <span>{tagId} </span>)
            } */}
            </div>
        </div>
    )
}