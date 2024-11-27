import React, { useEffect, useState } from 'react';

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
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
}

export default Home;
