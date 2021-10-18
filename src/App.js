import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>This project is coded by Miho Funayama and <a href="https://github.com/funamioh/weather-react-app">open-sourced on GitHub</a>. Also hosted on <a href="https://trusting-franklin-037844.netlify.app">Netlify</a></p>
      </footer>
    </div>
  );
}

export default App;
