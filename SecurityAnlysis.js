import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaUserSecret,
} from "react-icons/fa";

const SecurityAnalysis = ({ score }) => {

  const getThreatLevel = () => {
    if (score <= 2) return "High Risk";
    if (score <= 4) return "Moderate";
    return "Secure";
  };

  const getColor = () => {
    if (score <= 2) return "#ff4d4d";
    if (score <= 4) return "#ffd633";
    return "#00ff88";
  };

  return (

    <div className="security-analysis">

      <h2>
        <FaShieldAlt />
        &nbsp; Security Analysis
      </h2>

      <div className="analysis-grid">

        <div className="analysis-card">
          <FaLock className="analysis-icon" />

          <h3>Password Status</h3>

          <p style={{ color: getColor() }}>
            {getThreatLevel()}
          </p>
        </div>

        <div className="analysis-card">
          <FaBug className="analysis-icon" />

          <h3>Threat Detection</h3>

          <p>
            {score >= 4
              ? "Protected"
              : "Vulnerable"}
          </p>
        </div>

        <div className="analysis-card">
          <FaUserSecret className="analysis-icon" />

          <h3>Data Privacy</h3>

          <p>
            {score === 5
              ? "Encrypted"
              : "Weak Encryption"}
          </p>
        </div>

      </div>

    </div>
  );
};

export default SecurityAnalysis;