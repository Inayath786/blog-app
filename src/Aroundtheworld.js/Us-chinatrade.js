import React from "react";

function UsChinaTradeWar() {
  const containerStyle = {
    padding: "40px",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#2c3e50",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#1f3a93",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
  };

  const subheadingStyle = {
    fontSize: "1.8rem",
    color: "#34495e",
    marginTop: "30px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  const quoteStyle = {
    fontStyle: "italic",
    color: "#7f8c8d",
    borderLeft: "4px solid #1f3a93",
    paddingLeft: "15px",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🇺🇸 US-China Trade War: An Archive of Economic Tensions</h1>

      <p style={paragraphStyle}>
        The US-China trade war is one of the most significant economic confrontations of the 21st century.
        What began as tariff skirmishes quickly escalated into a global economic chessboard affecting
        companies, governments, and consumers worldwide.
      </p>

      <h2 style={subheadingStyle}>📅 Timeline of Key Events</h2>
      <p style={paragraphStyle}>
        <strong>2018 – Tariff Battles Begin:</strong> The US imposed tariffs on steel and aluminum. China responded with tariffs
        on US soybeans, cars, and seafood. Over $50 billion worth of goods were affected in the first wave.
      </p>
      <p style={paragraphStyle}>
        <strong>2019 – Escalation and Uncertainty:</strong> Both sides escalated the tariffs to over $300 billion. Tech giant Huawei was
        blacklisted. The uncertainty led to market volatility and disrupted supply chains.
      </p>
      <p style={paragraphStyle}>
        <strong>2020 – Phase One Deal:</strong> A partial truce was reached. China agreed to buy more US goods, and the US relaxed some
        tariffs. COVID-19 delayed enforcement and trust.
      </p>
      <p style={paragraphStyle}>
        <strong>2021–2023 – Cold Peace & Strategic Rivalry:</strong> While tariffs remained, the tone softened slightly. However,
        geopolitical tensions grew, especially over Taiwan, semiconductors, and tech supremacy.
      </p>

      <h2 style={subheadingStyle}>💥 Impact on Global Economy</h2>
      <p style={paragraphStyle}>
        The trade war impacted everything from farming in Iowa to electronics manufacturing in Shenzhen.
        US farmers lost the Chinese market temporarily, while consumers faced higher prices due to increased tariffs.
        Global supply chains were re-evaluated, leading to the rise of the "China+1" strategy.
      </p>

      <p style={quoteStyle}>
        "There are no winners in a trade war. Only collateral damage." – Global Economist
      </p>

      <h2 style={subheadingStyle}>🌐 Strategic Sectors Affected</h2>
      <ul style={{ ...paragraphStyle, paddingLeft: "20px" }}>
        <li><strong>Technology:</strong> The US cracked down on Huawei, TikTok, and other Chinese tech firms.</li>
        <li><strong>Agriculture:</strong> US soybeans, pork, and dairy faced massive losses due to Chinese tariffs.</li>
        <li><strong>Automotive:</strong> Companies had to redesign global supply and assembly lines to avoid tariffs.</li>
        <li><strong>Semiconductors:</strong> Became the center of national security and industrial policy battles.</li>
      </ul>

      <h2 style={subheadingStyle}>📈 Current Status (as of 2025)</h2>
      <p style={paragraphStyle}>
        While tariffs remain, both nations have begun limited cooperation in climate change and trade transparency.
        However, the tech war and strategic competition continue to deepen, suggesting a long-term rivalry shaping
        future economic policies.
      </p>

      <h2 style={subheadingStyle}>🔮 What Lies Ahead?</h2>
      <p style={paragraphStyle}>
        Experts suggest we are moving from "globalization" to "strategic decoupling". As AI, semiconductors, and
        renewable energy become core battlegrounds, the US-China tension may redefine global trade for the next decade.
      </p>
    </div>
  );
}

export default UsChinaTradeWar;
