import React from "react";

const Startwindow = (props) => {
    const { id, page, score, globaltime, questionsettime, questiontime, numberofquestions, display, style, } = props.info;

    return (
        <div key={props.id} info={props.info} className="popup-start" >
        <div className="start-mode" style={{display:(props.display === "active")?'block':'none'}}></div>
                    <div  className="start-window" style={{display:(props.display === "active")?'flex':'none'}}>
                        <h1>Ready for the test?</h1> 
                        <span>{props.numberofquestions} questions, {props.questionsettime} secs each</span> 
                        <span>Right answers +10, Wrong ones -10</span>
                        <span>2 right answers, one level up</span>
                        <span>2 wrong ones, one level down</span>
                        <span>Test duration {props.globaltime}.00 secs</span>
                        <div className="btn-start" onClick={() => props.launchtest()}>Start test</div>             
                    </div>
        </div>
    );
};

export default Startwindow ;