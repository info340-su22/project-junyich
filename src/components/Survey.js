import React, {useEffect, useRef, useState }from 'react';
import _ from 'lodash'

function CreateTable(props) {
    useEffect(() => {
        document.title = "Survey Page";  
      }, []);

    const tableArray = props.surveyData.map((element, index) => {
        const table = (
            <tr>
                <th key={index} scope="row">{index + 1}</th>
                <td key={element.disorder} id={element.disorder} onClick={props.handleTest}>{element.disorder}</td>
                <td>123</td>
            </tr>
        );
        return table;
    })
    
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
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
            <div className="form-group p-3">
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
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" id="fname" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" id="lname" />
                    </div>
                </div>
                <select className="custom-select" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>How old are you?</option>
                    <option value="1">Under 18</option>
                    <option value="2">18 - 24 yrs</option>
                    <option value="3">25 - 34 yrs</option>
                    <option value="4">35 - 44 yrs</option>
                    <option value="5">45 - 54 yrs</option>
                    <option value="6">55 - 64 yrs</option>
                    <option value="7">65 and over</option>
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
    //https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures#section_0
    
    //Parse data
    const [surveyData, setSurveyData] = useState([]);
    fetch("/SurveyData.json")
    .then((response) => {
        return response.json();
    }).then((data) => {
        if (data) {
            setSurveyData(data);
        }
    }).catch((error) => {
        console.log(error);
    })

    const [test, setTest] = useState(null);
    const [survey, setSurvey] = useState(null);
    const handleTest = (event) => {
        event.preventDefault();
        setTest(event.target.id);
        if (surveyData) {
            surveyData.forEach((element) => { 
                if (element.disorder === test) {
                    setSurvey(element);
                }
            })
        }
    }

    //Range slider
    const [range, setRange] = useState({});
    const [displayText, setText] = useState({'range1': 'None', 'range2': 'None', 'range3': 'None', 'range4': 'None', 'range5': 'None', 'range6': 'None', 'range7': 'None', 'range8': 'None'});
    let rangeText = {1: 'Never', 2:'Rarely', 3:'Sometimes', 4:'Often', 5:'Always'};
 
    const handleRange = (event) => {
        let id = event.target.id;
        setRange({...range, [id]: event.target.value});
        setText({...displayText, [id]: rangeText[event.target.value]});
    }

    //Show results after submit
    const bottomRef = useRef();

    let result;
    const [resultText, setResult] = useState(result);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (_.isEmpty(range)) {
            result = (
                <div className='mt-3 alert alert-warning text-center'>
                    <p>Please answer each question by draging the slider!</p>
                </div>
            );
            setResult(result);
            return;
        }

        let counts = Object.values(range).reduce((a, b) => ~~a + ~~b);
        
        if (_.size(range) < survey.numberQs) {
            result = (
                <p>Invalid Test, please make sure you have answered all the questions!</p>
            );
        } else if (counts >= survey.numberQs && counts < survey.noneScore) {
            result = (
                <p>You might have a <span className='font-weight-bold'>None to Slight</span> level of {survey.disorder}</p>
            );
        } else if (counts >= survey.noneScore && counts < survey.mildScore) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Mild</span> level of {survey.disorder}</p>
            );
        } else if (counts >= survey.mildScore && counts < survey.moderateScore) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Moderate</span> level of {survey.disorder}</p>
            );
        } else if (counts >= survey.moderateScore && counts <= survey.severeScore) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Severe</span> level of {survey.disorder}</p>
            );
        } else {
            setResult('');
            return;
        }

        setResult((
            <div className='mt-3 alert alert-success text-center' ref={bottomRef}>
                {result}
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
                <CreateTable surveyData={surveyData} handleTest={handleTest}/>
                <CreateTest survey={survey} handleTest={handleTest} displayText={displayText} handleRange={handleRange} handleSubmit={handleSubmit} resultText={resultText}/>
            </section>
        </main>
    )
}




// function ParseData(test) {
//     fetch("/SurveyData.json")
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         if (data) {
//             data.forEach((element) => { 
//                 if (element.disorder === test) {
//                     console.log(element);
//                     return element;
//                 }
//             })
//         }
//     }).catch((error) => {
//         console.log(error);
//     })
// }

// export default function Survey(props) {
//     //https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures#section_0

//     //Choose which test
//     const [test, setTest] = useState('Anxiety');
//     const handleTest = (event) => {
//         setTest(event.target.id)
//         console.log(test);
//     }

//     //Prase data
//     let data = ParseData(test);
//     console.log(data);

//     //Range slider

//     const [range, setRange] = useState({});
//     const [displayText, setText] = useState({'range1': 'None', 'range2': 'None', 'range3': 'None', 'range4': 'None', 'range5': 'None', 'range6': 'None', 'range7': 'None'});
//     let rangeText = {1: 'Never', 2:'Rarely', 3:'Sometimes', 4:'Often', 5:'Always'};
 
//     const handleRange = (event) => {
//         let id = event.target.id;
//         setRange({...range, [id]: event.target.value});
//         setText({...displayText, [id]: rangeText[event.target.value]});
//     }

//     //Show results after submit
//     const bottomRef = useRef();

//     let result;
//     const [resultText, setResult] = useState(result);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (_.isEmpty(range)) {
//             result = (
//                 <div className='mt-3 alert alert-warning text-center'>
//                     <p>Please answer each question by draging the slider!</p>
//                 </div>
//             );
//             setResult(result);
//             return;
//         }

//         let counts = Object.values(range).reduce((a, b) => ~~a + ~~b);
        
//         if (_.size(range) < 7) {
//             result = (
//                 <p>Invalid Test, please make sure you have answered all the questions!</p>
//             );
//         } else if (counts >= 7 && counts < 16) {
//             result = (
//                 <p>You might have a <span className='font-weight-bold'>None to Slight</span> level of Anxiety</p>
//             );
//         } else if (counts >= 16 && counts <20) {
//             result = (
//                 <p>You might have a <span className='font-weight-bold'>Mild</span> level of Anxiety</p>
//             );
//         } else if (counts >= 20 && counts <28) {
//             result = (
//                 <p>You might have a <span className='font-weight-bold'>Moderate</span> level of Anxiety</p>
//             );
//         } else if (counts >= 28) {
//             result = (
//                 <p>You might have a <span className='font-weight-bold'>Severe</span> level of Anxiety</p>
//             );
//         } else {
//             setResult('');
//             return;
//         }

//         setResult((
//             <div className='mt-3 alert alert-success text-center' ref={bottomRef}>
//                 {result}
//             </div>
//         ));

//         bottomRef.current.scrollIntoView();
//     }

//     function sortTable() {
//     }

//     //Render
//     return (
//         <main className="flex-main pb-3">
//             <section className="survey">
//                 <h2>Quick Mental Health Survey</h2>
//                 <p className="text-justify">In life, things happen. Helping yourself is actually not that hard! It only takes 3 minutes to complete one survey. Knowing yourself is the first step to recovery!</p>

//                 <table className="table">
//                     <thead className="thead-dark">
//                         <tr>
//                         <th scope="col">#</th>
//                         <th scope="col" onClick={sortTable}>Name</th>
//                         <th scope="col" onClick={sortTable}>Popularity</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                         <th scope="row">1</th>
//                         <td id={"Anxiety"} onClick={handleTest}>Anxiety</td>
//                         <td>123</td>
//                         </tr>
//                         <tr>
//                         <th scope="row">2</th>
//                         <td>Depression</td>
//                         <td>1234</td>
//                         </tr>
//                         <tr>
//                         <th scope="row">3</th>
//                         <td>Anger</td>
//                         <td>12345</td>
//                         </tr>
//                     </tbody>
//                 </table>

//                 <div className ="text-center m-3">
//                     <h1 className="text-primary">Anxiety</h1>
//                 </div>
//                 <form className="p-3">
//                     <div className="form-row">
//                         <div className="col">
//                             <input type="text" className="form-control" placeholder="First name" id="fname" />
//                         </div>
//                         <div className="col">
//                             <input type="text" className="form-control" placeholder="Last name" id="lname" />
//                         </div>
//                     </div>
//                     <select className="custom-select" defaultValue={'DEFAULT'}>
//                         <option value="DEFAULT" disabled>How old are you?</option>
//                         <option value="1">Under 18</option>
//                         <option value="2">18 - 24 yrs</option>
//                         <option value="3">25 - 34 yrs</option>
//                         <option value="4">35 - 44 yrs</option>
//                         <option value="5">45 - 54 yrs</option>
//                         <option value="6">55 - 64 yrs</option>
//                         <option value="7">65 and over</option>
//                     </select>
                    
//                     <h4 className="text-center p-3">In the past <span className='text-success'>7 days</span>, have you experienced any of the following condtions?</h4>
//                     <div className="card border-dark">
//                         <div className="card-body">
//                             <div className="form-group p-3">
//                                 <label htmlFor="range1" className='font-weight-bold lead'>I felt fearful: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range1}</span></label>
//                                 <input type="range" className="custom-range" id="range1" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range2" className='font-weight-bold lead'>I felt anxious: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range2}</span></label>
//                                 <input type="range" className="custom-range" id="range2" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range3" className='font-weight-bold lead'>I felt worried: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range3}</span></label>
//                                 <input type="range" className="custom-range" id="range3" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range4" className='font-weight-bold lead'>I found it hard to focus on anything other than my anxiety: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range4}</span></label>
//                                 <input type="range" className="custom-range" id="range4" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range5" className='font-weight-bold lead'>I felt nervous: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range5}</span></label>
//                                 <input type="range" className="custom-range" id="range5" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range6" className='font-weight-bold lead'>I felt uneasy: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range6}</span></label>
//                                 <input type="range" className="custom-range" id="range6" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                             <div className="form-group p-3">
//                                 <label htmlFor="range7" className='font-weight-bold lead'>I felt tense: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range7}</span></label>
//                                 <input type="range" className="custom-range" id="range7" min={1} max={5} onChange={handleRange}/>
//                             </div>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//                     {resultText}
//                 </form>
//             </section>
//         </main>
//     )
// }