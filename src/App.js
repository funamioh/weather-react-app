import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Tokyo"/>
      <footer>
        This project is coded by Miho Funayama and <a href="https://github.com/funamioh/weather-react-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>. Also hosted on <a href="https://trusting-franklin-037844.netlify.app" target="_blank" rel="noopener noreferrer">Netlify</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
