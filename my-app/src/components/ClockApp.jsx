import { useState, useEffect } from "react";

function ClockApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Clock started!");

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Clock stopped!");
    };
  }, []); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Live Digital Clock</h2>
      <h1 style={{ fontSize: "3rem", color: "#007bff" }}>{time}</h1>
    </div>
  );
}

export default ClockApp;
