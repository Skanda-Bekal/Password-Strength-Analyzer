import { useState } from "react";

function PasswordGenerator() {

  const [generated, setGenerated] = useState("");

  const generatePassword = () => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let pass = "";

    for (let i = 0; i < 14; i++) {
      pass += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setGenerated(pass);
  };

  return (
    <div className="glass rounded-3xl p-6">

      <h2 className="text-3xl mb-5 text-cyan-300 font-bold">
        Password Generator
      </h2>

      <div className="bg-black/30 p-4 rounded-xl break-all">
        {generated || "Generate secure password"}
      </div>

      <button
        onClick={generatePassword}
        className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 transition-all p-4 rounded-xl text-black font-bold"
      >
        Generate Password
      </button>

      {generated && (
        <button
          onClick={() => navigator.clipboard.writeText(generated)}
          className="mt-4 w-full bg-green-500 hover:bg-green-400 transition-all p-4 rounded-xl text-black font-bold"
        >
          Copy Password
        </button>
      )}

    </div>
  );
}

export default PasswordGenerator;