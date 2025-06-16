import React from "react";

const ClimateCrisis = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 Climate Crisis Explained</h1>
      <p style={styles.intro}>
        The climate crisis refers to the long-term shift in global or regional climate patterns, primarily caused by human activities like burning fossil fuels, deforestation, and industrial emissions. Let's break down this urgent global challenge.
      </p>

      <div style={styles.section}>
        <h2 style={styles.heading}>🚨 What Is Happening?</h2>
        <ul style={styles.list}>
          <li>🔥 Average global temperatures are rising rapidly.</li>
          <li>🌪️ Extreme weather events like hurricanes, floods, and droughts are becoming more frequent and intense.</li>
          <li>🧊 Arctic ice is melting at record rates, raising sea levels.</li>
          <li>🌳 Forests are being cleared, reducing Earth’s natural carbon sinks.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>📉 What’s Causing It?</h2>
        <p>
          Human activity is the primary driver. Burning fossil fuels for electricity, heat, and transportation releases greenhouse gases like carbon dioxide (CO₂) and methane (CH₄), which trap heat in the atmosphere.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>💥 Effects Around the World</h2>
        <ul style={styles.list}>
          <li>🌊 Island nations face the threat of submersion due to rising sea levels.</li>
          <li>🌽 Crop failures are increasing, affecting food security.</li>
          <li>🦠 Warmer temperatures aid the spread of diseases.</li>
          <li>🚶 Climate refugees are rising as people flee unlivable conditions.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>💡 What Can We Do?</h2>
        <ul style={styles.list}>
          <li>💨 Shift to renewable energy like solar and wind.</li>
          <li>🌱 Plant trees and protect forests.</li>
          <li>🚲 Adopt sustainable lifestyles — use public transport, reduce meat consumption, and conserve electricity.</li>
          <li>📣 Push governments and industries to act now.</li>
        </ul>
      </div>

      <p style={styles.closing}>
        🌟 The climate crisis is no longer a future threat — it is a present reality. Each action we take today builds a safer tomorrow.
      </p>
    </div>
  );
};

const styles = {
  container: {
    background: "#f0f9ff",
    color: "#1a202c",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "900px",
    margin: "40px auto",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    fontSize: "2.8rem",
    color: "#2c5282",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
  },
  intro: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#2b6cb0",
    marginBottom: "10px",
    fontWeight: "600",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
  closing: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: "40px",
    color: "#22543d",
  },
};

export default ClimateCrisis;
