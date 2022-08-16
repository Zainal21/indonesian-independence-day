import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [isRendered, setIsRendered] = useState(true);
  useEffect(() => {
    return () => {
      if (isRendered) {
        let container = document.querySelector(".container-flag");
        let containerSize = parseInt(getComputedStyle(container).width, 10);
        for (let i = 0; i < containerSize; i++) {
          let _flagElement = document.createElement("div");
          _flagElement.classList.add("flag");
          _flagElement.style.animationDelay = i * 10 + "ms";
          container.appendChild(_flagElement);
        }
        setIsRendered(false);
      }
    };
  }, []);

  return (
    <>
      <div className="container-flag"></div>
      <div
        style={{
          marginTop: "120px",
          boxSizing: "border-box",
        }}
      >
        <h3>Dirgahayu</h3>
        <h1
          style={{
            marginTop: "1rem",
          }}
        >
          <p>
            77<span>th</span>
          </p>
        </h1>
        <h4
          style={{
            marginTop: "-2rem",
          }}
        >
          Kemerdekaan
        </h4>
        <h2>Indonesia</h2>
      </div>
    </>
  );
}

export default App;
