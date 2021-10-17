import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>This project is coded by Miho Funayama and <a>open-sourced on GitHub</a>. Also hosted on Netlify</p>
      </footer>
    </div>
  );
}

export default App;
