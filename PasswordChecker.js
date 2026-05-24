import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;

  const strength =
    [hasUppercase, hasLowercase, hasNumber, hasSymbol, hasLength].filter(
      Boolean
    ).length * 20;

  const getMessage = () => {
    if (strength === 100) return "Excellent! Highly secure!";
    if (strength >= 80) return "Strong Password";
    if (strength >= 60) return "Medium Password";
    return "Weak Password";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#081b33",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "800px",
          background: "#132743",
          padding: "40px",
          borderRadius: "25px",
          color: "white",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Password Strength Analyzer
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#b8c7dc",
            marginBottom: "35px",
          }}
        >
          Secure Your Digital Life
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <div style={{ flex: 1 }}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background: "#23395d",
                color: "white",
                fontSize: "18px",
                outline: "none",
              }}
            />

            {/* PROGRESS BAR */}
            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#1a1a1a",
                borderRadius: "10px",
                marginTop: "25px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${strength}%`,
                  height: "100%",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(to right, red, orange, yellow, limegreen)",
                  transition: "0.5s",
                }}
              ></div>
            </div>

            <button
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "25px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(to right,#0072ff,#00c6ff)",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Copy Password
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div style={{ width: "220px" }}>
            <Check text="8+ Characters" valid={hasLength} />
            <Check text="Uppercase" valid={hasUppercase} />
            <Check text="Lowercase" valid={hasLowercase} />
            <Check text="Numbers" valid={hasNumber} />
            <Check text="Symbols" valid={hasSymbol} />
          </div>
        </div>

        {/* SECURITY BOX */}
        <div
          style={{
            marginTop: "35px",
            background: "#1d3557",
            borderRadius: "18px",
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Security Analysis</h2>

            <p style={{ marginTop: "15px" }}>
              Crack Time:{" "}
              <span
                style={{
                  color: "#00ffd5",
                  fontWeight: "bold",
                }}
              >
                {strength === 100
                  ? "Centuries"
                  : strength >= 80
                  ? "Years"
                  : strength >= 60
                  ? "Months"
                  : "Minutes"}
              </span>
            </p>

            <p style={{ marginTop: "15px", color: "#d7e3f4" }}>
              {getMessage()}
            </p>
          </div>

          <div
            style={{
              fontSize: "70px",
            }}
          >
            😎
          </div>
        </div>
      </div>
    </div>
  );
}

function Check({ text, valid }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        color: valid ? "#4dff88" : "#ccc",
        fontSize: "17px",
      }}
    >
      <span
        style={{
          marginRight: "10px",
          fontSize: "20px",
        }}
      >
        {valid ? "✔️" : "⭕"}
      </span>

      {text}
    </div>
  );
}

export default PasswordChecker;