import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow-lg rounded">
        <Weather defaultCity="Houston" />

        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://romiecastilleja.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Romie Castilleja
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Romiec13/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}