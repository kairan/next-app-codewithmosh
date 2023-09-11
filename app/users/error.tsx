"use client";
import React from "react";
type Props = {
  error: Error;
  reset: () => void;
};
const ErrorUserPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occurred in User.</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  );
};

export default ErrorUserPage;
