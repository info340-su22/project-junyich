import React from 'react';

export default function Lifestyle(props) {
    return (
        <div>
            <main className="flex-main pb-3">
            <h2>Recommended Podcasts:</h2>
            <p>How does one navigate through life? With all the information given about mental health, it is
                natural to learn through mediums other than surveys and reading. Here at iMental, we value
                podcasts as they are great sources of information with hosts that provide high quality research
                on mental health topics. Additionally, in our busy life, podcasts makes it easier for us to gain
                information, as we can go on a run, do errands or do other things while simultaneously learning.
            </p>
                <div className="card">
                    <div className="card-body">
                        <h3>1. Let's Talk About Mental Health</h3>
                        <p>Each episode contains a particular topic filled with questions. The host,
                            Jeremy Godwin, provides quality advice from research to overcome difficult mental
                            health challenges. </p>
                        <iframe style={{float: 'left'}} title="spotifyFrame" src="https://open.spotify.com/embed/show/2kH3ec1ljTia7VmwYsm8Xt?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
                            <iframe style={{float: 'left'}} title="spotifyFrame" src="https://open.spotify.com/embed/show/4P86ZzHf7EOlRG7do9LkKZ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3>3. The Happiness Lab</h3>
                            <p>How does one measure happiness? What does it exactly look like, how do you gain it and how do you create happiness?
                            Many of us question happiness and wonder what things can make us truly happy. Well, there's a science for it! Dr. Laurie
                            Santos delves into happiness and provides advice on what can make us feel better in our lives. 
                            </p>
                            <iframe style={{float: 'left'}} title="spotifyFrame" src="https://open.spotify.com/embed/show/3i5TCKhc6GY42pOWkpWveG?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}