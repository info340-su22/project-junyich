import React, {useEffect, useState} from 'react';
import mentalData from '../data/MentalHealthTreatment.json';
import Plot from 'react-plotly.js';
import { Alert } from 'react-bootstrap';

export default function Lifestyle(props) {
    useEffect(() => {
        document.title = "Lifestyle Page";  
      }, []);
    const [alertMessage, setAlertMessage] = useState(null);
    const [initialData, setData] = useState({types:['Age'], percent:[9.5, 11.6, 9.1, 5.7]});

    const handleBarGraph = (event) => {
        mentalData.forEach(each=>{
            if(each.id === event.currentTarget.id){
                setData({types: each.Types, percent: each.Percent})
            }
        })
    }

    return (
        <div>
            <div className="flex-container">
                <main className="flex-main pb-3">
                    <div className="card">
                        <div className="card-body">
                            <h2>The Journey to Taking Care of Yourself</h2>
                            <p>Once we've learned about our issues, the next step to growth is developing healthy and
                                productive habits. Although this page is not an exhaustive list of the many ways to take care
                                of yourself, iMental has provided some resources that you can apply in your life!
                            </p>
                            <p>Below is a graph that illustrates the percentages of individuals that have received counseling/therapy in the United States of 2020.
                                Taken from the <a href="https://www.cdc.gov/nchs/products/databriefs/db419.htm#:~:text=In%202020%2C%2020.3%25%20of%20U.S.,from%20a%20mental%20health%20professional.">
                                CDC</a>, you can click on the buttons to view different demographic statistics. By calling attention to these numbers and demographics, iMental
                                extends support to individuals that want to try therapy and counseling. Remember, you are not alone!
                            </p>
                            <div>
                                {alertMessage &&
                                    <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
                                }
                                <h3>Percentages of Received Therapy/Counseling</h3>
                                <button className="btn btn m-1 btn-primary" id='A' onClick={handleBarGraph}>Age</button>
                                <button className="btn btn m-1 btn-primary" id='B' onClick={handleBarGraph}>Sex</button>
                                <button className="btn btn m-1 btn-primary" id='C' onClick={handleBarGraph}>Race</button>
                                <button className="btn btn m-1 btn-primary" id='D' onClick={handleBarGraph}>Urbanization Level</button>
                            </div>
                            <div className="plot">
                                <Plot
                                    data={[
                                        {
                                            type: 'pie',
                                            labels: initialData.types,
                                            values: initialData.percent,
                                            text: initialData.percent.map(String),
                                            marker: {
                                                color: 'rgba(,0,225,.5)',
                                                mode: 'lines+markers',
                                            },
                                            sort: false
                                        }
                                    ]}
                                    layout = {{
                                        paper_bgcolor: 'rgba(245,246,249,1)',
                                        plot_bgcolor: 'rgba(245,246,249,1)'
                                    }}
                                    style={{width: '100%', height: '100%'}}
                                    useResizeHandler={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2>Downloadable Content</h2>
                                <p>Journaling and writing down your personal thoughts is a great way to get to know yourself better, and
                                    what state you currently are in. For people who are starting to journal for the first time, it may feel
                                    a bit uncomfortable. Where do I start? What should I write down? How do I collect my thoughts and
                                    represent them well on paper?
                                    
                                    At iMental, we want to provide resources to get you started on journaling! Below are sample templates
                                    to help you get started! </p>
                                    <ul>
                                        <li><a href="https://docdro.id/nn6htqY" download> Weekly Reflection </a></li>
                                        <li><a href="https://docdro.id/EBafJp9" download> Habit Tracker </a></li>
                                    </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h2>Recommended Podcasts:</h2>
                        <p>How does one navigate through life other than therapy and counseling? With all the information given about mental health, it is
                            natural to learn through mediums other than surveys and reading. Here at iMental, we value
                            podcasts as they are great sources of information with hosts that provide high quality research
                            on mental health topics. Additionally, in our busy life, podcasts makes it easier for us to gain
                            information, as we can go on a run, do errands or do other things while simultaneously learning.
                        </p>
                            <h3>1. Let's Talk About Mental Health</h3>
                            <p>Each episode contains a particular topic filled with questions. The host,
                                Jeremy Godwin, provides quality advice from research to overcome difficult mental
                                health challenges. </p>
                            <iframe title="spotifyFrame" src="https://open.spotify.com/embed/show/2kH3ec1ljTia7VmwYsm8Xt?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3>2. Unlocking Us With Brené Brown</h3>
                                <p>How do relationships work? Whether the relationship is romantic, familial or even with our
                                peers and co-workers, how do we create long-lasting ones? How can we cultivate vulnerability
                                and connections within our relationship? In this podcast, Brené Brown explores everything that
                                has to do with relationships and emotions. For those that struggle to understand their emotions
                                and the role of relationships in their life, this podcast is great for some insight.
                                </p>
                                <iframe title="spotifyFrame" src="https://open.spotify.com/embed/show/4P86ZzHf7EOlRG7do9LkKZ?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3>3. The Happiness Lab</h3>
                                <p>How does one measure happiness? What does it exactly look like, how do you gain it and how do you create happiness?
                                Many of us question happiness and wonder what things can make us truly happy. Well, there's a science for it! Dr. Laurie
                                Santos delves into happiness and provides advice on what can make us feel better in our lives. 
                                </p>
                                <iframe title="spotifyFrame" src="https://open.spotify.com/embed/show/3i5TCKhc6GY42pOWkpWveG?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}