import React from "react";

function Pattern() {
  const containerStyle = {
    padding: "50px",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#00ffcc",
    textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
  };

  const subheadingStyle = {
    fontSize: "1.6rem",
    color: "#ffd700",
    marginTop: "30px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#f0f0f0",
    marginTop: "10px",
    textAlign: "justify",
  };

  const bulletStyle = {
    marginTop: "10px",
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Every Rupee You Spend on UPI Is More Valuable Than Your Password</h1>

      <h2 style={subheadingStyle}>🌐 Introduction</h2>
      <p style={paragraphStyle}>
        In the digital era, every rupee you spend via UPI isn't just a transaction — it's a piece of a much larger puzzle:
        <strong> your behavioral identity</strong>. These patterns reveal more about you than any password ever could.
      </p>

      <h2 style={subheadingStyle}>📊 What Data Is Captured in UPI Transactions?</h2>
      <ul style={bulletStyle}>
        <li>📍 Location of transaction (GPS, merchant category)</li>
        <li>⏰ Time, frequency, and duration between payments</li>
        <li>💳 Type of purchases (groceries, fuel, entertainment, etc.)</li>
        <li>📱 Device used and app behavior patterns</li>
      </ul>

      <h2 style={subheadingStyle}>🧠 Why This Data Is More Powerful Than Passwords</h2>
      <p style={paragraphStyle}>
        Passwords can be changed. But your **spending behavior** forms a permanent and predictable pattern:
      </p>
      <ul style={bulletStyle}>
        <li>🔐 Passwords = static access keys</li>
        <li>🧬 Patterns = behavioral DNA that’s hard to fake or erase</li>
        <li>🎯 Used to target, score, or influence you</li>
      </ul>

      <h2 style={subheadingStyle}>🧠 What Your UPI Behavior Reveals</h2>
      <ul style={bulletStyle}>
        <li>🧾 Financial discipline or instability</li>
        <li>🎯 Personality traits: impulsive, frugal, social, etc.</li>
        <li>🕵️ Risk profile for insurance, loans, or ads</li>
        <li>📦 What you're likely to buy next — and when</li>
      </ul>

      <h2 style={subheadingStyle}>💼 How Companies Use This Data</h2>
      <ul style={bulletStyle}>
        <li>🚀 Hyper-targeted ads based on your purchase history</li>
        <li>🏦 Personalized loan offers & financial products</li>
        <li>🛒 Predictive commerce (products shown before you even search)</li>
        <li>🔄 Reselling anonymized behavior data to third parties</li>
      </ul>

      <h2 style={subheadingStyle}>⚠️ Risks of Ignoring This</h2>
      <ul style={bulletStyle}>
        <li>🧠 Mental manipulation through digital behavior targeting</li>
        <li>💸 Dynamic pricing based on your wealth signals</li>
        <li>🎯 Formation of digital scoring & surveillance economy</li>
        <li>🔓 Data leaks that compromise long-term behavioral identity</li>
      </ul>

      <h2 style={subheadingStyle}>🔐 How to Protect Yourself</h2>
      <ul style={bulletStyle}>
        <li>✅ Use fewer apps and avoid linking all services</li>
        <li>✅ Deny unnecessary app permissions (location, contacts, SMS)</li>
        <li>✅ Use cash for sensitive or private purchases</li>
        <li>✅ Educate yourself on how your data is being collected and used</li>
      </ul>

      <h2 style={subheadingStyle}>🧭 Final Thoughts</h2>
      <p style={paragraphStyle}>
        In a world of invisible scoring systems and silent surveillance, your **UPI spending patterns**
        could speak louder than your words. They tell companies and systems not just what you did — but who you are and what you will do next.
      </p>
      <p style={paragraphStyle}>
        <strong>Passwords can be changed. Patterns cannot.</strong>
      </p>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://www.buymeacoffee.com/inayath"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#FFDD00",
            color: "#000",
            fontWeight: "bold",
            fontSize: "18px",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  );
}

export default Pattern;
