import React from 'react';

export default function Main(props) {
    return (
        <div className='flex-main pb-3 ml-3'>
            <section className="survey">
            <h2>Survey</h2>
                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="person_sex" className="font-weight-bold">Sex</label>
                            <select className="custom-select" id="person_sex">
                                <option selected>Choose your identity here</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="person_age" className="font-weight-bold">Age</label>
                            <input type="text" className="form-control" placeholder="Enter your age here" id="person_age" />
                        </div>
                    </div>

                    <div className="form-group mt-2 mb-1">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="acknowledgement" />
                            <label className="form-check-label" htmlFor="acknowledgement">
                                By checking the box, you acknowledge that iMental would use your answers to the questions to help diagnose your mental state.
                                <ul className="mb-0">
                                    <li>iMental would not save your answers in any form after the diagnosis is finish.</li>
                                    <li>iMental would not share your answers with any individuals in any forms.</li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Continue</button>
                </form>
            </section>

            <h2>Video of the Week:</h2>
            <div className="card">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/RrWBhVlD1H8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}