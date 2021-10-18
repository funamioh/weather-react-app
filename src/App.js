import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>This project is coded by Miho Funayama and <a href="https://github.com/funamioh/weather-react-app">open-sourced on GitHub</a>. Also hosted on <a href="https://app.netlify.com/sites/trusting-franklin-037844/overview">Netlify</a></p>
      </footer>
    </div>
  );
}

export default App;
