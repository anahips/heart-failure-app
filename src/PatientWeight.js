import React from "react";
import "./PatientWeight.css";

export default function PatientWeight() {
  return (
    <div className="PatientWeight">
      <h5>Enter your weight in kilograms</h5>
      <p>
        Note: It is easier to monitor significant weight changes in kilograms
        instead of stone.
      </p>
      <form>
        <input type="text" className="weight" placeholder="Example 95" />
        <input type="submit" />
      </form>
    </div>
  );
}
