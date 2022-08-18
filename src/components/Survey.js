import React, {useEffect, useRef, useState }from 'react';
import _ from 'lodash'

function createQustions() {
    
}

export default function Survey(props) {
    //https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/assessment-measures#section_0

    //Range slider
    const bottomRef = useRef();

    const [range, setRange] = useState({});
    const [displayText, setText] = useState({'range1': 'None', 'range2': 'None', 'range3': 'None', 'range4': 'None', 'range5': 'None', 'range6': 'None', 'range7': 'None'});
    let rangeText = {1: 'Never', 2:'Rarely', 3:'Sometimes', 4:'Often', 5:'Always'};
 
    const handleRange = (event) => {
        let id = event.target.id;
        setRange({...range, [id]: event.target.value});
        setText({...displayText, [id]: rangeText[event.target.value]});
    }

    //Show results after submit
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
        
        if (_.size(range) < 7) {
            result = (
                <p>Invalid Test, please make sure you have answered all the questions!</p>
            );
        } else if (counts >= 7 && counts < 16) {
            result = (
                <p>You might have a <span className='font-weight-bold'>None to Slight</span> level of Anxiety</p>
            );
        } else if (counts >= 16 && counts <20) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Mild</span> level of Anxiety</p>
            );
        } else if (counts >= 20 && counts <28) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Moderate</span> level of Anxiety</p>
            );
        } else if (counts >= 28) {
            result = (
                <p>You might have a <span className='font-weight-bold'>Severe</span> level of Anxiety</p>
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

        bottomRef.current.scrollIntoView();
    }

    function sortTable() {
    }

    //Render
    return (
        <main className="flex-main pb-3">
            <section className="survey">
                <h2>Quick Mental Health Survey</h2>
                <p className="text-justify">In life, things happen. Helping yourself is actually not that hard! It only takes 3 minutes to complete one survey. Knowing yourself is the first step to recovery!</p>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col" onClick={sortTable}>Name</th>
                        <th scope="col" onClick={sortTable}>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Anxiety</td>
                        <td>123</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Depression</td>
                        <td>1234</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Anger</td>
                        <td>12345</td>
                        </tr>
                    </tbody>
                </table>

                <div className ="text-center m-3">
                    <h1 className="text-primary">Anxiety</h1>
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
                    <h4 className="text-center p-3">In the past <span className='text-success'>7 days</span>, have you experienced any of the following condtions?</h4>
                    <div className="card border-dark">
                        <div className="card-body">
                            <div className="form-group p-3">
                                <label htmlFor="range1" className='font-weight-bold lead'>I felt fearful: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range1}</span></label>
                                <input type="range" className="custom-range" id="range1" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range2" className='font-weight-bold lead'>I felt anxious: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range2}</span></label>
                                <input type="range" className="custom-range" id="range2" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range3" className='font-weight-bold lead'>I felt worried: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range3}</span></label>
                                <input type="range" className="custom-range" id="range3" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range4" className='font-weight-bold lead'>I found it hard to focus on anything other than my anxiety: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range4}</span></label>
                                <input type="range" className="custom-range" id="range4" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range5" className='font-weight-bold lead'>I felt nervous: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range5}</span></label>
                                <input type="range" className="custom-range" id="range5" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range6" className='font-weight-bold lead'>I felt uneasy: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range6}</span></label>
                                <input type="range" className="custom-range" id="range6" min={1} max={5} onChange={handleRange}/>
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="range7" className='font-weight-bold lead'>I felt tense: <span className='border border-info rounded text-danger p-1 ml-3'>{displayText.range7}</span></label>
                                <input type="range" className="custom-range" id="range7" min={1} max={5} onChange={handleRange}/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    {resultText}
                </form>
            </section>
        </main>
    )
}