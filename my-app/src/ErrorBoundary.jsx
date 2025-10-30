import React, { useState } from "react";

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  
  if (error) {
    return (
      <div style={{ padding: "1rem", background: "#fee2e2", color: "#b91c1c", borderRadius: "8px" }}>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button
          onClick={() => setError(null)}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    );
  }


  return <ErrorCatcher onError={setError}>{children}</ErrorCatcher>;
}

class ErrorCatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
    this.props.onError(error);
  }

  render() {
    if (this.state.hasError) {
      return null; 
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
