function SecurityTips() {

  const tips = [
    "Use at least 12 characters",
    "Include uppercase and lowercase letters",
    "Add numbers and symbols",
    "Never reuse passwords",
    "Enable two-factor authentication"
  ];

  return (

    <div className="glass rounded-3xl p-6 mt-8">

      <h2 className="text-3xl text-cyan-300 font-bold mb-6">
        Security Tips
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-black/20 p-4 rounded-xl border border-cyan-500"
          >
            🔐 {tip}
          </div>
        ))}

      </div>

    </div>
  );
}

export default SecurityTips;