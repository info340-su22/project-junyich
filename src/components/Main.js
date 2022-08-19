import React, { useState, useEffect } from 'react';
import Plot from "react-plotly.js";
import { Alert } from 'react-bootstrap';

export default function Main(props) {
    useEffect(() => {
        document.title = "Main Page";  
      }, []);
    const [graphData, setGraphData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [data, setData] = useState({types:['Overall'], percent:[21]});
    
    fetch("/TopicData.json")
    .then((response) => {
        return response.json();
    }).then((data) => {
        setGraphData(data);
    })
    .catch((error) => {
        setAlertMessage("Failed to filter. Showing only overall percentage");
    })

    const dataForGraph = graphData;
    const handleGraph = (event) => {
        dataForGraph.forEach(each=>{
            if(each.id === event.currentTarget.id){
                setData({types: each.Types, percent: each.Percent})
            }
        })
    }
    return (
        <div className='flex-main pb-3 ml-3'>
            <section id="What_is_the_Problem">
                <h2>What is the Problem</h2>
                <p>On social media and on online platforms, information is constantly being disseminated at an alarming rate. There is a vast amount of posts being shared daily, causing us to barely comprehend the spread and amount of information online. With so much available on the Internet, there are numerous resources that are accessible. Because of the Internet, users can schedule appointments online, contact their doctors or physicians through an app, and learn more about conditions or ailments. However, the apps and information available for mental health are not as trustworthy as we want them to be or adequate enough to support users.</p>
            </section>
            <section id="Why_the_Problem_Needs_Addressing">
                <h2>Why the Problem Needs Addressing</h2>
                <p>The issue that we want to address is the potential harm of unverified information about mental health on social media and on the Internet. There are an abundance of apps that allow users to take surveys to learn whether they may have a particular condition or not. However, most of these surveys are notcredible – they do not rely on certified sources, but merely on information from the Internet. Websites like <a href="https://psychcentral.com/" target="_blank" rel="noreferrer"> PsychCentral</a>, <a href="https://www.psychologytoday.com/us" target="_blank" rel="noreferrer"> Psychology Today</a>, and <a href="https://www.talkspace.com/" target="_blank" rel="noreferrer"> Talk Space</a> have surveys for users to take, but the questions are typically too obvious (and are leading at times) and are not backed by any source.</p>
            </section>
            <section id="Our_Goal">
                <h2>Our Goal</h2>
                <p>To prevent unnecessary worry and ensure more credible tests, we aim to create an application that takes information from the DSM-5 and curates questions that are not leading or too obvious to diagnose. After all, our intentions of these tests are to spark awareness and lead users to other resources instead of diagnosing too easily or encouraging answers. Additionally, users will feel more confident knowing that their tests come from a source that is credible and verified.</p>
            </section>
            <div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h2>Mental Illness Percentage Graph</h2>
                            <p>This graph observes the total percentage of U.S adults who are suffering from any mental illness. The data was retrieved from <a href="https://www.nimh.nih.gov/health/statistics/mental-illness">National Institute of Mental Health</a>.</p>
                            <em>Click to filter the graph:</em>
                            {alertMessage &&
                                <Alert variant="danger" dismissible onClose={() => setAlertMessage(null)}>{alertMessage}</Alert>
                            }
                            <button className="btn btn m-1 btn-primary" id='A' onClick={handleGraph}>Overall</button>
                            <button className="btn btn m-1 btn-primary" id='B' onClick={handleGraph}>Sex</button>
                            <button className="btn btn m-1 btn-primary" id='C' onClick={handleGraph}>Age</button>
                            <button className="btn btn m-1 btn-primary" id='D' onClick={handleGraph}>Race</button>
                        </div>
                        <div>
                            <Plot
                                data={[
                                    {
                                        type: 'bar',
                                        x: data.types,
                                        y: data.percent,
                                        text: data.percent.map(String),
                                        marker: {
                                            color: 'rgba(58,200,225,.5)',
                                            line: {
                                            color: 'rgb(8,48,107)',
                                            width: 1.5
                                            }
                                        }
                                    }
                                ]}
                                layout = {{
                                    title: "Percentage of U.S. Adults Suffering Mental Illness",
                                    xaxis: {automargin: true},
                                    yaxis: {automargin: true, range: [0, 40],
                                    title: "Percentage(%)"},
                                    paper_bgcolor: 'rgba(245,246,249,1)',
                                    plot_bgcolor: 'rgba(245,246,249,1)'
                                }}
                                style={{width: '100%', height: '100%'}}
                                useResizeHandler={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}