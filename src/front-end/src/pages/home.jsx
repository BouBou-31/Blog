import React, { useEffect, useState } from 'react';
import videoSource from "./../assets/background-homepage.mp4";

function Home() {
    const [data, setData] = useState(null);

    const maFonction = () => {
        console.log('Le composant est chargé !');
      };
    
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(data => setData(data.message));
        maFonction();

    }, []);

    return (
        <body>
        <div className="App">
            <div className="App-body">
                <video className="video-background" autoPlay muted loop>
                    <source src={videoSource} type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                <p>
                Coucou ma vie
                </p>
                <a
                className="App-link"
                href="https://www.youtube.com/watch?v=oBbHo8b4FDc&ab_channel=B20baOfficiel"
                target="_blank"
                rel="noopener noreferrer"
                >
                Clique
                </a>
            </div>
        </div>
        </body>
    );
}

export default Home;
