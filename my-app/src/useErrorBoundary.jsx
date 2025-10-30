import { useState, useCallback } from "react";

export function useErrorBoundary() {
  const [error, setError] = useState(null);

  // Reset karne 
  const resetError = useCallback(() => setError(null), []);

  // Error throw karne 
  const throwError = useCallback((err) => setError(err), []);

  return { error, throwError, resetError };
}
