import React from 'react';

export default function Survey(props) {

    return (
        <main className="flex-main pb-3">
            <section className="survey">
                <h2>Quick Mental Health Survey</h2>
                <p className="text-justify">In life, things happen. Helping yourself is actually not that hard! It only takes 3 minutes to complete one survey. Knowing yourself is the first step to recovery!</p>
                <div className ="text-center m-3">
                    <h1 className="text-primary">Generalized Anxiety Disorder</h1>
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
                    <select className="custom-select">
                        <option selected>How old are you?</option>
                        <option value="1">Under 18</option>
                        <option value="2">18 - 24 yrs</option>
                        <option value="3">25 - 34 yrs</option>
                        <option value="4">35 - 44 yrs</option>
                        <option value="5">45 - 54 yrs</option>
                        <option value="6">55 - 64 yrs</option>
                        <option value="7">65 and over</option>
                    </select>
                    <h4 className="text-center p-3">Have you experienced any of the following condtions?</h4>
                    <div className="card border-dark">
                        <div className="card-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check1" />
                                <label className="form-check-label" for="check1">
                                    Excessive anxiety and worry (apprehensive expectation), occurring more days than not for at least 6 months, about a number of events or activities (such as work or school performance).
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check2" />
                                <label className="form-check-label" for="check2">
                                    The individual finds it difficult to control the worry.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check3" />
                                <label className="form-check-label" for="check3">
                                    The anxiety and worry are associated with three (or more) of the following six symptoms (with at least some symptoms having been present for more days than not for the past 6 months):
                                </label>
                                <ol>
                                    <li className="m-1">Restlessness or feeling keyed up or on edge.</li>
                                    <li className="m-1">Being easily fatigued.</li>
                                    <li className="m-1">Difficulty concentrating or mind going blank.</li>
                                    <li className="m-1">Irritability.</li>
                                    <li className="m-1">Muscle tension.</li>
                                    <li className="m-1">Sleep disturbance (difficulty falling or staying asleep, or restless, unsatisfying sleep).</li>
                                </ol>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check4" />
                                <label className="form-check-label" for="check4">
                                    The anxiety, worry, or physical symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check5" />
                                <label className="form-check-label" for="check5">
                                    The disturbance is not better explained by another mental disorder
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </main>
    )
}