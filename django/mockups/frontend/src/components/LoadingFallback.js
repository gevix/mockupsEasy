import React from "react";

export default function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
