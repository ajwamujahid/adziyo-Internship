import React, { useState } from "react";

function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("Crashed intentionally ");
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <p>Click the button — it will crash after 5 clicks!</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Click me ({count})
      </button>
    </div>
  );
}

export default BuggyComponent;
