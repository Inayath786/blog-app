import React from "react";

function GreenHydrogenSolar() {
  const styles = {
    container: {
      padding: "40px",
      background: "linear-gradient(to right, #004e92, #000428)",
      color: "#f0f0f0",
      fontFamily: "'Segoe UI', sans-serif",
      lineHeight: "1.8",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "2.8rem",
      textAlign: "center",
      marginBottom: "30px",
      color: "#00e5ff",
      textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
    },
    subheading: {
      fontSize: "1.8rem",
      color: "#ffd700",
      marginTop: "30px",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginTop: "10px",
      color: "#e0e0e0",
      textAlign: "justify",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "10px",
    },
    quote: {
      fontStyle: "italic",
      color: "#b0c4de",
      borderLeft: "4px solid #00e5ff",
      paddingLeft: "15px",
      margin: "20px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌱 India’s Green Hydrogen & Solar Expansion</h1>

      <p style={styles.paragraph}>
        India is undergoing an energy revolution by scaling up solar power while
        investing in green hydrogen — a sustainable fuel produced using renewable
        energy. Together, these form the backbone of India's clean energy future.
      </p>

      <h2 style={styles.subheading}>☀️ Solar Expansion</h2>
      <p style={styles.paragraph}>
        India is ranked 5th globally in solar capacity. As of 2024, installed solar
        power capacity has surpassed <strong>80 GW</strong>, with initiatives targeting
        280 GW by 2030 under the National Solar Mission. Major solar parks include:
      </p>
      <ul style={styles.list}>
        <li><strong>Bhadla Solar Park, Rajasthan:</strong> ~2.3 GW, the world’s largest.</li>
        <li><strong>Rewa Solar, Madhya Pradesh:</strong> 750 MW.</li>
        <li><strong>Pavagada Solar Park, Karnataka:</strong> 2 GW+</li>
      </ul>

      <h2 style={styles.subheading}>💧 Green Hydrogen Mission</h2>
      <p style={styles.paragraph}>
        Launched in 2023, the National Green Hydrogen Mission sets an ambitious
        agenda:
      </p>
      <ul style={styles.list}>
        <li><strong>5 million tonnes/year</strong> production target by 2030.</li>
        <li><strong>125 GW</strong> renewable capacity to power electrolysers.</li>
        <li><strong>₹10 lakh crore</strong> ($120 bn+) in investment projection.</li>
        <li><strong>~600,000 jobs</strong> to be created across value chains.</li>
      </ul>

      <h2 style={styles.subheading}>🔗 Synergy of Solar + Hydrogen</h2>
      <p style={styles.paragraph}>
        Solar and green hydrogen are deeply interlinked — solar power
        runs the electrolysis plants that produce hydrogen. This allows:
      </p>
      <ul style={styles.list}>
        <li>Decarbonizing hard-to-electrify industries (steel, chemicals)</li>
        <li>Seasonal energy storage in the form of hydrogen gas</li>
        <li>Export opportunities to countries with green energy deficits</li>
      </ul>

      <p style={styles.quote}>
        “Green hydrogen powered by India's solar boom can redefine global energy markets.” — Energy Analyst (2024)
      </p>

      <h2 style={styles.subheading}>🌍 Strategic & Global Impact</h2>
      <ul style={styles.list}>
        <li>Reduces oil & gas import reliance</li>
        <li>Strengthens supply chain security</li>
        <li>Positions India as a green energy exporter</li>
        <li>Supports climate goals: 2070 net-zero commitment</li>
      </ul>

      <h2 style={styles.subheading}>⚠️ Challenges & Roadblocks</h2>
      <ul style={styles.list}>
        <li>High electrolyser costs and capital expenses</li>
        <li>Need for storage, transport, and H₂ infrastructure</li>
        <li>Grid integration and land-use demands</li>
        <li>Ensuring economic viability in a competitive global market</li>
      </ul>

      <h2 style={styles.subheading}>🔮 The Path Ahead</h2>
      <p style={styles.paragraph}>
        To lead the green energy revolution, India is forging public-private
        partnerships, deploying pilot plants, and offering incentives. The goal: a
        resilient clean energy ecosystem that starts at home and spreads globally.
      </p>

      <p style={styles.paragraph}>
        India’s clean energy journey is not just ambitious; it’s essential — for the
        planet’s future and the nation’s prosperity.
      </p>
       {/* Add a coffee button if you want */}
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

export default GreenHydrogenSolar;
