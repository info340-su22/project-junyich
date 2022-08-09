import React from 'react';

export default function Main(props) {
    return (
        <div className='flex-main pb-3 ml-3'>
            <section class="survey">
            <h2>Survey</h2>
                <form>
                    <div class="row">
                        <div class="col">
                            <label for="person_sex" class="font-weight-bold">Sex</label>
                            <select class="custom-select" id="person_sex">
                                <option selected>Choose your identity here</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                            </select>
                        </div>

                        <div class="col">
                            <label for="person_age" class="font-weight-bold">Age</label>
                            <input type="text" class="form-control" placeholder="Enter your age here" id="person_age" />
                        </div>
                    </div>

                    <div class="form-group mt-2 mb-1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="acknowledgement" />
                            <label class="form-check-label" for="acknowledgement">
                                By checking the box, you acknowledge that iMental would use your answers to the questions to help diagnose your mental state.
                                <ul class="mb-0">
                                    <li>iMental would not save your answers in any form after the diagnosis is finish.</li>
                                    <li>iMental would not share your answers with any individuals in any forms.</li>
                                </ul>
                            </label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Continue</button>
                </form>
            </section>

            <h2>Video of the Week:</h2>
            <div class="card">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/RrWBhVlD1H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}