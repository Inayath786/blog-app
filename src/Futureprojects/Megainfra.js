import React from "react";

function MegaInfrastructure() {
  const styles = {
    container: {
      padding: "40px",
      background: "linear-gradient(to right, #0a0a0a, #2c3e50)",
      color: "#ecf0f1",
      fontFamily: "'Segoe UI', sans-serif",
      lineHeight: "1.8",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "2.8rem",
      textAlign: "center",
      marginBottom: "30px",
      color: "#1abc9c",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    },
    subheading: {
      fontSize: "1.8rem",
      color: "#f39c12",
      marginTop: "30px",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginTop: "10px",
      color: "#ecf0f1",
      textAlign: "justify",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🏗️ Mega Infrastructure & Expressways: India's Road to Tomorrow</h1>

      <p style={styles.paragraph}>
        India is forging ahead with one of the world's **most ambitious road infrastructure programs**, aimed at transforming connectivity, logistics, and economic growth. From national highways to expressways, India’s roads are shaping the nation’s future.
      </p>

      <h2 style={styles.subheading}>🛣️ National Highways & Expressway Network</h2>
      <p style={styles.paragraph}>
        The National Highways Authority of India (NHAI) oversees over <strong>150,000 km of highways</strong>. However, it's the flagship Expressway program that’s witnessing monumental change.
      </p>
      <ul style={styles.list}>
        <li><strong>Golden Quadrilateral:</strong> 5,846 km connecting Delhi–Mumbai–Chennai–Kolkata–Delhi.</li>
        <li><strong>North–South–East–West Corridor (NS–EW):</strong> Links Srinagar ↔ Kanyakumari and Silchar ↔ Porbandar.</li>
        <li><strong>Expressways Planned/Under Construction:</strong> Delhi–Mumbai, Delhi–Kolkata, Chennai–Vizag, Delhi–Meerut, and more.</li>
      </ul>

      <h2 style={styles.subheading}>🚀 Expressway Highlights</h2>
      <ul style={styles.list}>
        <li><strong>Delhi–Mumbai Expressway:</strong> 1,350 km — India’s longest greenfield expressway, reducing travel to ~12 hrs.</li>
        <li><strong>Delhi–Kolkata Expressway:</strong> 1,400 km; strategic for Eastern India.</li>
        <li><strong>Chennai–Bengaluru Expressway:</strong> 540 km greenfield link; supports the tech corridor.</li>
        <li><strong>Delhi–Meerut Expressway:</strong> 96 km; India’s first access-controlled urban expressway.</li>
      </ul>

      <h2 style={styles.subheading}>💡 Key Advantages</h2>
      <ul style={styles.list}>
        <li><strong>⏩ Faster Commutes:</strong> Travel speeds of 120–150 km/h, reducing fatigue and time.</li>
        <li><strong>⚖️ Economic Boost:</strong> Lower logistics cost by 20–25%, improving trade and industry.</li>
        <li><strong>🛡️ Safety:</strong> Modern-designed roads with medians, bypasses, and reduced intersections.</li>
        <li><strong>🌿 Regional Growth:</strong> Enhanced connectivity brings small towns into main economic streams.</li>
      </ul>

      <h2 style={styles.subheading}>🧱 Implementation & Technology</h2>
      <p style={styles.paragraph}>
        Projects are executed via PPP models with international partners (Japan, Germany). Usage of modern tech like:
      </p>
      <ul style={styles.list}>
        <li>Pre-stressed concrete pavements</li>
        <li>Automated tolling systems (FASTag)</li>
        <li>Intelligent Traffic Management Systems (ITMS)</li>
        <li>Drone surveillance and quality control</li>
      </ul>

      <h2 style={styles.subheading}>🌍 One Belt, One Road vs India’s Vision</h2>
      <p style={styles.paragraph}>
        While China's Belt & Road Initiative links infrastructure globally, India is developing its own domestic infrastructure backbone. With expressways and railway and port integration, this supports the vision of “Ease of Doing Business” and is central to Atmanirbhar Bharat.
      </p>

      <h2 style={styles.subheading}>🔮 What Lies Ahead</h2>
      <ul style={styles.list}>
        <li>30,000 km+ of expressways by 2030</li>
        <li>Smart highways with solar lighting, sensors, EV charging lanes</li>
        <li>Enhanced road-railport connectivity under Bharatmala & Sagarmala</li>
        <li>Highway freight corridors and logistics parks</li>
      </ul>

      <h2 style={styles.subheading}>💬 Final Thoughts</h2>
      <p style={styles.paragraph}>
        Mega expressways are not just roads—they are catalysts for transformation. India's commitment to infrastructure shows in every newly paved kilometer, propelling commerce, employment, and regional integration. The journey to a connected India has truly begun.
      </p>
    </div>
  );
}

export default MegaInfrastructure;
