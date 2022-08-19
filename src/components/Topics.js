import React, { useRef, useEffect } from 'react';

export default function Topics() {
    useEffect(() => {
        document.title = "Topics Page";  
      }, []);
    const anxietyRef = useRef();
    const addictionRef = useRef();
    const depressionRef = useRef();
    const ptsdRef = useRef();
    const adhdRef = useRef();
    const bipolarRef = useRef();
    const eatingRef = useRef();
    const schiRef = useRef();
    const psychosisRef = useRef();
    const handleClick = (event) => {
        event.preventDefault();
        if (event.currentTarget.name === "Anxiety") {
            anxietyRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Addiction") {
            addictionRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Depression") {
            depressionRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "PTSD") {
            ptsdRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "ADHD") {
            adhdRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Bipolar Disorder") {
            bipolarRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Eating Disorders") {
            eatingRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Schizophrenia") {
            schiRef.current.scrollIntoView();
        } else if (event.currentTarget.name === "Psychosis") {
            psychosisRef.current.scrollIntoView();
        }
    }

    return (
        <div className="flex-container">
            <main className="flex-main pb-3">
                <section className="search_index">
                    <h2>Topics</h2>
                    <p>At iMental, we strive to spread awareness about mental illness and mental disorders.
                    There's a lot of information online and so much to learn about in terms of mental health.
                    To save you time and to reduce the amount of false information, we have provided quick
                    summaries of common disorders with additional resources. The topics are not an exhaustive list.</p>
                    <div className="row">
                        <SortButton name="Anxiety" onClick={handleClick} />
                        <SortButton name="Addiction" onClick={handleClick} />
                        <SortButton name="Depression" onClick={handleClick} />
                        <SortButton name="PTSD" onClick={handleClick} />
                        <SortButton name="ADHD" onClick={handleClick} />
                        <SortButton name="Bipolar Disorder" onClick={handleClick} />
                        <SortButton name="Eating Disorders" onClick={handleClick} />
                        <SortButton name="Schizophrenia" onClick={handleClick} />
                        <SortButton name="Psychosis" onClick={handleClick} />
                    </div> 
                </section>
                <div id="anxiety" ref={anxietyRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Anxiety</h2>
                            <p>According to the DSM-5, there are many anxiety disorders. The 6 most common types of anxiety
                                are:</p>
                            <ul>
                                <li>Post-Traumatic Stress Disorder (PTSD)</li>
                                <li>Obsessive-Compulsive Disorder (OCD)</li>
                                <li>Separation Anxiety Disorder</li>
                                <li>Generalized Anxiety Disorder (GAD)</li>
                                <li>Panic Disorders</li>
                                <li>Social Anxiety</li>
                            </ul>
                             <p>Each disorder has their own symptoms, but most of them overlap with one another. The most common
                                symptoms of anxiety are: excessive worry, fear, lack of concentration, racing thoughts,
                                unwanted thoughts, fatigue or sweating, trembling, palpitations, etc. Anxiety disorders are very common,
                                and there are many treatments available.</p>
                            
                            <h3>For More Information:</h3>
                            <ul>
                                <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t15/">DSM-5 Information on Anxiety</a></li>
                                <li><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders">Anxiety Disorders</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="addiction" ref={addictionRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Addiction</h2>
                            <p>Addiction has different levels of severity, which depends on
                                how severe an individual relies on a particular substance. According
                                to the DSM-5, there are four categories of addiction:</p>
                            <ul>
                                <li>Impaired control</li>
                                <li>Social problems</li>
                                <li>Risky use</li>
                                <li>Physical dependence</li>
                            </ul>
                            <p>Some symptoms include:</p>
                            <ul>
                                <li>Inability to control behavior towards the substance</li>
                                <li>Less socialization, especially with close relationships</li>
                                <li>Increase in impulsive behavior</li>
                                <li>Failure to quit using substance; feels that they cannot let go of it</li>
                            </ul>
                            <p>According to the DSM-5, if an individual has more than three symptoms of addiction,
                                it would indicate a severe case of addiction. Fortunately, there are many support groups
                                and communities that advocate for better awareness and support for addictive disorders.</p>
                            <h3>For More Information:</h3>
                            <ul>
                                <li><a href="https://www.addictionpolicy.org/post/dsm-5-facts-and-figures">DSM-5 Summary of Addiction</a></li>
                                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5328289/">Definition of Addiction: DSM-5 vs. ICD-11</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div id="depression" ref={depressionRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Depression</h2>
                            <p>In 2020, it was <a href="https://www.nimh.nih.gov/health/statistics/major-depression">reported</a> that an estimated 21.0 million adults in the U.S.
                                had suffered from a depressive episode. Among the other disorders, depression is the most common
                                mental disorder in the United States. For some individuals, this disorder may look differently from
                                others that suffer from it. Some may exhibit many of the symptoms and others may only exhibit
                                just a couple. 
                                The symptoms are listed as follows:</p>
                            <ul>
                                <li>Depressed mood most of the day, nearly every day.</li>
                                <li>Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day.</li>
                                <li>Significant weight loss when not dieting or weight gain, or decrease or increase in appetite nearly every day.</li>
                                <li>A slowing down of thought and a reduction of physical movement (observable by others, not merely subjective feelings of restlessness or being slowed down).</li>
                                <li>Fatigue or loss of energy nearly every day.</li>
                                <li>Feelings of worthlessness or excessive or inappropriate guilt nearly every day.</li>
                                <li>Diminished ability to think or concentrate, or indecisiveness, nearly every day.</li>
                                <li>Recurrent thoughts of death, recurrent suicidal ideation without a specific plan, or a suicide attempt or a specific plan for committing suicide.</li>
                            </ul>
                            <p>According to DSM-5, individual is defined as having Depression when they experience five or more symptoms during the same 2-week period and should be either (1) depressed mood or (2) loss of interest or pleasure.</p> 
                            
                            <h3>For More Information:</h3>
                            <ul>
                                <li><a href="https://www.psycom.net/depression/major-depressive-disorder/dsm-5-depression-criteria">Depression Definition and DSM-5 Diagnostic Criteria</a></li>
                                <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519712/table/ch3.t5/">DSM-IV to DSM-5 Major Depressive Episode/Disorder Comparison</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="ptsd" ref={ptsdRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>PTSD</h2>
                            <p>
                                Post-traumatic stress disorder, also known as PTSD, is a psychiatric disorder that person may experience after the exposure to traumatic event, which causes extreme distress and diruption to daily living. Around 6% of U.S people reported that they experience PTSD in their lives. There are four main categories of symptoms of PTSD:
                            </p>
                            <ul>
                                <li>Intrusion</li>
                                <li>Avoidance of thoughts and behaviors</li>
                                <li>Negative changes in thoughts and mood</li>
                                <li>Changes in arousal and reactivity</li>
                            </ul>
                            <p>The 8 criterias that define PTSD are as follows:</p>
                            <ul>
                                <li>Exposure to actual or threatened death, serious injury, or sexual violence</li>
                                <li>Presence of intrusion symptoms associated with the traumatic event(s), beginning after the traumatic event(s) occurred</li>
                                <li>Persistent avoidance of stimuli associated with the traumatic event(s), beginning after the traumatic event(s) occurred</li>
                                <li>Negative alterations in cognitions and mood associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred.</li>
                                <li>Marked alterations in arousal and reactivity associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred</li>
                                <li>Duration of the disturbance is more than 1 month.</li>
                                <li>The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.</li>
                                <li>The disturbance is not attributable to the physiological effects of a substance (e.g., medication, alcohol) or another medical condition.</li>
                            </ul>
                            <h3>For More Information:</h3>
                            <ul>
                                <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK207191/box/part1_ch3.box16/">DSM-5 Diagnostic Criteria for PTSD</a></li>
                                <li><a href="https://www.verywellmind.com/ptsd-in-the-dsm-5-2797324#:~:text=What%20is%20the%20DSM%2D5,changes%20in%20arousal%20and%20reactivity.">What Is Post-Traumatic Stress Disorder?</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="adhd" ref={adhdRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>ADHD</h2>
                            <p>People with ADHD are tend to show persistent patterns of inattention and/or hyperacctivity-impulsivity that interferes with daily lives/development. Typically, ADHD arises with people before the age of 12, but some adults may experience as well. Some criterias for ADHD are as follows:</p>
                            <ul>
                                <li>Six or more symptoms of inattention for children up to age 16 years, or five or more for adolescents age 17 years and older and adults; symptoms of inattention have been present for at least 6 months, and they are inappropriate for developmental level:
                                    <ul>
                                        <li>Often fails to give close attention to details or makes careless mistakes in schoolwork, at work, or with other activities.</li>
                                        <li>Often has trouble holding attention on tasks or play activities.</li>
                                        <li>Often does not seem to listen when spoken to directly.</li>
                                        <li>Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (e.g., loses focus, side-tracked).</li>
                                        <li>Often has trouble organizing tasks and activities.</li>
                                        <li>Often avoids, dislikes, or is reluctant to do tasks that require mental effort over a long period of time (such as schoolwork or homework).</li>
                                        <li>Often loses things necessary for tasks and activities (e.g. school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile telephones).</li>
                                        <li>Is often easily distracted.</li>
                                        <li>Is often forgetful in daily activities.</li>
                                    </ul>
                                </li>
                                <li>Hyperactivity and Impulsivity: Six or more symptoms of hyperactivity-impulsivity for children up to age 16 years, or five or more for adolescents age 17 years and older and adults; symptoms of hyperactivity-impulsivity have been present for at least 6 months to an extent that is disruptive and inappropriate for the person’s developmental level.
                                    <ul>
                                        <li>Often fidgets with or taps hands or feet, or squirms in seat.</li>
                                        <li>Often leaves seat in situations when remaining seated is expected.</li>
                                        <li>Often runs about or climbs in situations where it is not appropriate (adolescents or adults may be limited to feeling restless).</li>
                                        <li>Often unable to play or take part in leisure activities quietly.</li>
                                        <li>Is often “on the go” acting as if “driven by a motor”.</li>
                                        <li>Often talks excessively.</li>
                                        <li>Often blurts out an answer before a question has been completed.</li>
                                        <li>Often has trouble waiting their turn.</li>
                                        <li>Often interrupts or intrudes on others (e.g., butts into conversations or games)</li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>For More Information:</h3>
                            <li><a href="https://www.cdc.gov/ncbddd/adhd/diagnosis.html">Attention-Deficit / Hyperactivity Disorder (ADHD)</a></li>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519712/table/ch3.t3/">DSM-IV to DSM-5 Attention-Deficit/Hyperactivity Disorder Comparison</a></li>
                        </div>
                    </div>
                </div>
                <div id="bipolar" ref={bipolarRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Bipolar Disorder</h2>
                            <p>
                                Bipolar disorder is a brain disorder that causes changes in a person's mood, energy, and ability to function. People with bipolar disorder experience intense emotional states that typically occur during distinct periods of days to weeks, called mood episodes. People are diagnosed with Bipolar Disorder according to some symptoms as follows:
                            </p>
                            <ul>
                                <li>Manic Episode</li>
                                <ul>
                                    <li>
                                        A manic episode is a period of at least one week when a person is extremely high-spirited or irritable most of the day for most days and possesses more energy than usual.
                                    </li>
                                </ul>
                                <li>Hypomanic Episode</li>
                                <ul>
                                    <li>
                                        A hypomanic episode is characterized by less severe manic symptoms that need to last only four days in a row rather than a week. Hypomanic symptoms do not lead to the major problems in daily functioning that manic symptoms commonly cause.
                                    </li>
                                </ul>
                                <li>Major Depressive Episode</li>
                                <ul>
                                    <li>A major depressive episode is a period of at least two weeks in which a person has at least five of the following symptoms (including at least one of the first two symptoms):</li>
                                    <ul>
                                        <li>Intense sadness or despair</li>
                                        <li>Loss of interest in activities the person once enjoyed</li>
                                        <li>Feelings of worthlessness or guilt</li>
                                        <li>Fatigue</li>
                                        <li>Increased or decreased sleep</li>
                                        <li>Increased or decreased appetite</li>
                                        <li>Restlessness (e.g., pacing) or slowed speech or movement</li>
                                        <li>Difficulty concentrating</li>
                                        <li>Frequent thoughts of death or suicide</li>
                                    </ul>
                                </ul>
                            </ul>
                            
                            <h3>For More Information:</h3>
                            <li><a href="https://psychiatry.org/patients-families/bipolar-disorders/what-are-bipolar-disorders">What Are Bipolar Disorders?</a></li>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519712/table/ch3.t8/">DSM-IV to DSM-5 Bipolar I Disorder Comparison</a></li>
                        </div>
                    </div>
                </div>
                <div id="eating" ref={eatingRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Eating Disorder</h2>
                            <p>
                                Eating disorders are behavioral conditions characterized by severe and persistent disturbance in eating behaviors and associated distressing thoughts and emotions. They can be very serious conditions affecting physical, psychological and social function. Types of eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, avoidant restrictive food intake disorder, other specified feeding and eating disorder, pica and rumination disorder. Taken together, eating disorders affect up to 5% of the population, most often develop in adolescence and young adulthood. Several, especially anorexia nervosa and bulimia nervosa are more common in women, but they can all occur at any age and affect any gender. There are three types of eating disorders:
                            </p>
                            <ul>
                                <li>Anorexia Nervosa</li>
                                <ul>
                                    <li>Anorexia nervosa is characterized by self-starvation and weight loss resulting in low weight for height and age. Anorexia nervosa is characterized by following symptoms:
                                        <ul>
                                            <li>Menstrual periods cease</li>
                                            <li>Dizziness or fainting from dehydration</li>
                                            <li>Brittle hair/nails</li>
                                            <li>Cold intolerance</li>
                                            <li>muscle weakness and wasting</li>
                                            <li>Heartburn and reflux (in those who vomit)</li>
                                            <li>Severe constipation, bloating and fullness after meals</li>
                                            <li>Stress fractures from compulsive exercise as well as bone loss resulting in osteopenia or osteoporosis (thinning of the bones)</li>
                                            <li>Depression, irritability, anxiety, poor concentration and fatigue</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li>Bulimia Nervosa</li>
                                <ul>
                                    <li>Individuals with bulimia nervosa can be slightly underweight, normal weight, overweight or even obese. If they are underweight however, they are considered to have anorexia nervosa binge-eating/purging type not bulimia nervosa. Family members or friends may not know that a person has bulimia nervosa because they do not appear underweight and because their behaviors are hidden and may go unnoticed by those close to them. Possible signs that someone may have bulimia nervosa include:
                                        <ul>
                                            <li>Frequent trips to the bathroom right after meals</li>
                                            <li>Large amounts of food disappearing or unexplained empty wrappers and food containers</li>
                                            <li>Chronic sore throat</li>
                                            <li>Swelling of the salivary glands in the cheeks</li>
                                            <li>Dental decay resulting from erosion of tooth enamel by stomach acid</li>
                                            <li>Heartburn and gastroesophageal reflux</li>
                                            <li>Laxative or diet pill misuse</li>
                                            <li>Recurrent unexplained diarrhea</li>
                                            <li>Misuse of diuretics (water pills)</li>
                                            <li>Feeling dizzy or fainting from excessive purging behaviors resulting in dehydration</li>
                                        </ul>
                                    </li>
                                </ul>
                                <li>
                                    Binge Eating Disorder
                                    <ul>
                                        <li>As with bulimia nervosa, people with binge eating disorder have episodes of binge eating in which they consume large quantities of food in a brief period, experience a sense of loss of control over their eating and are distressed by the binge behavior. Unlike people with bulimia nervosa however, they do not regularly use compensatory behaviors to get rid of the food by inducing vomiting, fasting, exercising or laxative misuse. The binge eating is chronic and can lead to serious health complications, including obesity, diabetes, hypertension and cardiovascular diseases. Some criterias of binge eating disorder include:
                                            <ul>
                                                <li>Eating more rapidly than normal</li>
                                                <li>Eating until uncomfortably full</li>
                                                <li>Eating large amounts of food when not feeling hungry</li>
                                                <li>Eating alone because of feeling embarrassed by how much one is eating</li>
                                                <li>Feeling disgusted with oneself, depressed or very guilty afterward</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h3>For More Information:</h3>
                            <li><a href="https://psychiatry.org/patients-families/eating-disorders/what-are-eating-disorders">What Are Eating Disorders?</a></li>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519712/table/ch3.t16/">DSM-IV to DSM-5 Bulimia Nervosa Comparison</a></li>
                        </div>
                    </div>
                </div>
                <div id="schizophrenia" ref={schiRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Schizophrenia</h2>
                            <p>
                                Schizophrenia involves a range of cognitive, behavioral, and emotional symptoms, and as clinicians know, it can be difficult to diagnose. There’s no simple physical or lab test for schizophrenia, and diagnosis involves the recognition of a constellation of symptoms negatively impacting social or occupational functioning. According to the DSM-5, the lifetime prevalence of schizophrenia is approximately 0.3% to 0.7%. Psychotic features of the disorder typically emerge between the mid-teens and mid-30s, with the peak age of onset of the first psychotic episode in the early to mid-20s for males and late 20s for females. More on age of onset and racial disparities in schizophrenia. The symptoms regarding schizophrenia are as follows:
                            </p>
                            <ul>
                                <li>Positive symptoms:
                                    <ul>
                                        <li>Hallucinations, such as hearing voices or seeing things that do not exist, paranoia and exaggerated or distorted perceptions, beliefs and behaviors.</li>
                                    </ul>
                                </li>
                                <li>Negative symptoms:
                                    <ul>
                                        <li> A loss or a decrease in the ability to initiate plans, speak, express emotion or find pleasure.</li>
                                    </ul>
                                </li>
                                <li>Disorganized symptoms:
                                    <ul>
                                        <li>Confused and disordered thinking and speech, trouble with logical thinking and sometimes bizarre behavior or abnormal movements.</li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <h3>For More Information:</h3>
                            <li><a href="https://psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia">What Is Schizophrenia?</a></li>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t22/">DSM-IV to DSM-5 Schizophrenia Comparison</a></li>
                        </div>
                    </div>
                </div>
                <div id="psychosis" ref={psychosisRef}>
                    <div className="card">
                        <div className="card-body">
                            <h2>Psychosis</h2>
                            <p>
                                Psychosis is a combination of symptoms resulting in an impaired relationship with reality. It can be a symptom of serious mental health disorders. The person experiencing psychosis may also have thoughts that are contrary to actual evidence. These thoughts are known as delusions. Some people with psychosis may also experience loss of motivation and social withdrawal. The warning signs that may appear before psychosis develops include:
                            </p>
                            <ul>
                                <li>a sudden drop in school work or job performance</li>
                                <li>trouble thinking clearly</li>
                                <li>difficulty concentrating</li>
                                <li>feeling paranoid or suspicious of others</li>
                                <li>withdrawing from friends and loved ones</li>
                                <li>an influx of strange, new feelings, or no feeling at all</li>
                                <li>a disinterest in personal grooming</li>
                                <li>difficulty separating reality from non-reality</li>
                                <li>trouble communicating</li>
                            </ul>
                            <p>Also, main symptoms of psychosis include:</p>
                            <ul>
                                <li>hallucinations</li>
                                <li>delusions</li>
                                <li>disorganized behavior (behavior that does not seem to make sense, or that is impulsive)</li>
                                <li>negative symptoms (seemingly having no emotion, lack of interest in activities previously enjoyed, an ungroomed appearance, etc.)</li>
                                <li>catatonia (a “frozen” appearance)</li>
                            </ul>
                            <h3>For More Information:</h3>
                            <li><a href="https://www.healthline.com/health/psychosis">Psychosis</a></li>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t20/">DSM-IV to DSM-5 Psychotic Disorders</a></li>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


function SortButton(props) {
    return (
        <button className="btn btn-info m-1 btn-lg" onClick={props.onClick} name={props.name}>{props.name}</button>
    );
}