import React, { useEffect, useRef, useState }from "react";
import { Alert } from 'react-bootstrap';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';
import _ from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

//Source: https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures#section_0

function CreateTable(props) {
    const popularity = props.popularity;

    const tableArray = props.surveyData.map((element, index) => {
        const id = element.disorder + "Count";
        const table = (
            <tr onClick={props.handleTest} key={element.disorder}>
                <th key={index} id={element.disorder} scope="row">{index + 1}</th>
                <td key={element.disorder} id={element.disorder}>{element.disorder}</td>
                <td key={id} id={element.disorder}>{popularity[id]}</td>
            </tr>
        );
        return table;
    })
    
    return (
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" key="#">#</th>
                    <th scope="col" key="Name">Name</th>
                    <th scope="col" key="Popularity">Popularity</th>
                </tr>
            </thead>
            <tbody>
                {tableArray}
            </tbody>
        </table>
    );
}

function CreateTest(props) {
    if (!props.survey) return;

    let survey = props.survey;
    let displayText = props.displayText;

    const questionArray = survey.questions.map((element, index) => {
        let range = "range" + (index + 1);
        let text = element + ": ";
        const questions = (
            <div className="form-group p-3" key={index}>
                <label htmlFor={range} className='font-weight-bold lead'>{text}<span className='border border-info rounded text-danger p-1 ml-3'>{displayText[range]}</span></label>
                <input type="range" className="custom-range" id={range} min={survey.min} max={survey.max} onChange={props.handleRange}/>
            </div>
        );
        return questions;
    })
    
    return (
        <>
            <div className ="text-center m-3">
                <h1 className="text-primary">{props.survey.disorder}</h1>
            </div>
            <form className="p-3">
                <div className="form-row">
                    <div className="col" key="fname">
                        <input type="text" className="form-control" placeholder="First name" id="fname" onChange={props.handleUser} />
                    </div>
                    <div className="col" key="lname">
                        <input type="text" className="form-control" placeholder="Last name" id="lname" onChange={props.handleUser} />
                    </div>
                </div>
                <select className="custom-select" defaultValue={'DEFAULT'} id={'age'} onChange={props.handleUser}>
                    <option value="DEFAULT" disabled>How old are you?</option>
                    <option value="<18">Under 18</option>
                    <option value="18-24">18 - 24 yrs</option>
                    <option value="25-34">25 - 34 yrs</option>
                    <option value="35-44">35 - 44 yrs</option>
                    <option value="45-54">45 - 54 yrs</option>
                    <option value="55-64">55 - 64 yrs</option>
                    <option value=">65">65 and over</option>
                </select>
                
                <h4 className="text-center p-3">In the past <span className='text-success'>{survey.daysBefore} days</span>, have you experienced any of the following condtions?</h4>
                <div className="card border-dark">
                    <div className="card-body">
                        {questionArray}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
                {props.resultText}
            </form>
        </>
    );
}


export default function Survey(props) {
    useEffect(() => {
        document.title = "Survey Page";  
    }, []);
    //Parse data
    const [surveyData, setSurveyData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isQuerying, setIsQuerying] = useState(false); //for spinner
    useEffect(() =>{
        setAlertMessage(null);
        setIsQuerying(true);
        fetch("/SurveyData.json")
        .then((response) => {
            return response.json();
        }).then((data) => {
            if (data) {
                setSurveyData(data);
            }
        }).catch((error) => {
            setAlertMessage("Failed to receive data from server.");
        })
        .then((search) => {
            setIsQuerying(false)
        })
    }, [])
    //Firebase database
    const [popularity, setPopularity] = useState({});
    useEffect(() => {
        const db = getDatabase();
        const popularityRef = ref(db, "popularity");

        //firebaseSet(popularityRef, {DepressionCount: 0, AnxietyCount: 0, AngerCount: 0});
        onValue(popularityRef, (snapshot) => {
            const newVal = snapshot.val();
            if (popularity != null) {
                setPopularity(newVal);
            }
        })
    }, [popularity]);

    //Set which disorder
    const [test, setTest] = useState(null);
    const [survey, setSurvey] = useState(null);

    const handleTest = (event) => {
        event.preventDefault();
        setTest(event.target.id);
    }

    useEffect(() => {
        if (surveyData) {
            surveyData.forEach((element) => { 
                if (element.disorder === test) {
                    setSurvey(element);
                }
            })
        }
    }, [test, surveyData]);

    //Range slider
    const [range, setRange] = useState({});
    const [displayText, setText] = useState({'range1': 'None', 'range2': 'None', 'range3': 'None', 'range4': 'None', 'range5': 'None', 'range6': 'None', 'range7': 'None', 'range8': 'None'});
    let rangeText = {1: 'Never', 2:'Rarely', 3:'Sometimes', 4:'Often', 5:'Always'};
 
    const handleRange = (event) => {
        let id = event.target.id;
        setRange({...range, [id]: event.target.value});
        setText({...displayText, [id]: rangeText[event.target.value]});
    }

    //User Info: First name, Last name, & age.
    const [user, setUser] = useState(null);
    const handleUser = (event) => {
        let id = event.target.id;
        setUser({...user, [id]: event.target.value});
    }

    //Show results after submit
    const bottomRef = useRef();

    let result;
    const [resultText, setResult] = useState(result);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (user == null || user.fname == null || user.lname == null || user.age == null) {
            setResult(
                <div className='mt-3 alert alert-warning text-center' ref={bottomRef}>
                    <p>Please provide your name and age before submit!</p>
                </div>
            );
            if (bottomRef.current) bottomRef.current.scrollIntoView();
            return;
        }

        if (_.isEmpty(range)) {
            result = (
                <div className='mt-3 alert alert-warning text-center'>
                    <p>Please answer each question by draging the slider!</p>
                </div>
            );
            setResult(result);
            if (bottomRef.current) bottomRef.current.scrollIntoView();
            return;
        }

        let counts = Object.values(range).reduce((a, b) => ~~a + ~~b);

        if (_.size(range) < survey.numberQs) {
            setResult(
                <div className='mt-3 alert alert-warning text-center' ref={bottomRef}>
                    <p>Invalid Test, please make sure you have answered all the questions!</p>
                </div>
            );
            if (bottomRef.current) bottomRef.current.scrollIntoView();
            return;
        }
        
        if (counts >= survey.numberQs && counts < survey.noneScore) {
            result = 'None to Slight';
        } else if (counts >= survey.noneScore && counts < survey.mildScore) {
            result = 'Mild';
        } else if (counts >= survey.mildScore && counts < survey.moderateScore) {
            result = 'Moderate';
        } else if (counts >= survey.moderateScore && counts <= survey.severeScore) {
            result = 'Severe';
        } else {
            setResult('');
            return;
        }

        if (_.size(range) >= survey.numberQs) {
            const db = getDatabase();
            const popularityRef = ref(db, "popularity");
            const submissionRef = ref(db, "submittedTests");
    
            const id = survey.disorder + "Count";
            firebaseSet(popularityRef, {...popularity, [id]: ~~popularity[id] + ~~1});
            
            const name = user.fname + ' ' + user.lname;
            firebasePush(submissionRef, {fname: user.fname, lname: user.lname, fullName: name, age: user.age, level: result, type: survey.disorder});
        }

        setResult((
            <div className='mt-3 alert alert-success text-center' ref={bottomRef}>
                <p>You might have a <span className='font-weight-bold'>{result}</span> level of {survey.disorder}</p>
            </div>
        ));

        if (bottomRef.current) bottomRef.current.scrollIntoView();
    }

    //Render
    return (
        <main className="flex-main pb-3">
            <section className="survey">
                <h2>Quick Mental Health Survey</h2>
                <p className="text-justify">In life, things happen. Helping yourself is actually not that hard! It only takes 3 minutes to complete one survey. Knowing yourself is the first step to recovery!</p>
                {isQuerying && <FontAwesomeIcon icon={faSpinner} spin size="4x" aria-label="Loading..." aria-hidden="false"/>}
                {alertMessage &&
                    <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
                }
                <CreateTable surveyData={surveyData} handleTest={handleTest} popularity={popularity}/>
                {survey == null &&
                    <h3 className='text-center alert alert-dark'>Please <span className='text-info'>click</span> table above to start desired test!</h3>
                }
                <CreateTest survey={survey} handleTest={handleTest} displayText={displayText} handleRange={handleRange} handleUser={handleUser} handleSubmit={handleSubmit} resultText={resultText}/>
            </section>
        </main>
    )
}