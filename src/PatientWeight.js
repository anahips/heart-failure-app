import React from "react";
import "./PatientWeight.css";

export default function PatientWeight() {
  return (
    <div className="PatientWeight">
      <h5>Enter your weight in kilograms</h5>
      <input type="text" className="weight" placeholder="example 95" />
      <input type="submit" />
      <br />
      <p>
        Note: It is easier to monitor significant weight changes in kilograms
        instead of stone.
      </p>
    </div>
  );
}
