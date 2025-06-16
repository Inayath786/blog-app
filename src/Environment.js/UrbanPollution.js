import React from "react";

const UrbanPollution = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏙️ Urban Pollution: Its Impact and Solutions</h1>
      <p style={styles.intro}>
        Urban areas, though hubs of opportunity and development, are becoming hotspots for pollution — endangering the environment, public health, and overall quality of life. Let’s explore the causes, impacts, and solutions to this growing crisis.
      </p>

      <section style={styles.section}>
        <h2 style={styles.heading}>⚠️ What Causes Urban Pollution?</h2>
        <ul style={styles.list}>
          <li>🚗 Vehicular Emissions – Major contributor to air pollution in cities.</li>
          <li>🏭 Industrial Waste – Unregulated factories release harmful gases and chemicals.</li>
          <li>🗑️ Poor Waste Management – Overflowing landfills and open garbage burning release toxins.</li>
          <li>🌇 Construction Activities – Dust and debris pollute both air and water.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>💣 Major Impacts</h2>
        <ul style={styles.list}>
          <li>🫁 Respiratory Diseases – Rise in asthma, bronchitis, and lung cancer cases.</li>
          <li>😷 Lower Life Expectancy – Prolonged exposure reduces human lifespan.</li>
          <li>🌳 Environmental Degradation – Smog harms trees, wildlife, and ecosystems.</li>
          <li>🚰 Water Contamination – Industrial waste seeps into water sources.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>🛠️ Effective Solutions</h2>
        <ul style={styles.list}>
          <li>🚲 Promote Public Transport & Cycling – Reduce vehicle density.</li>
          <li>🏢 Green Building Codes – Encourage eco-friendly infrastructure.</li>
          <li>🌳 Urban Afforestation – Plant trees in public areas and rooftops.</li>
          <li>🔁 Recycling & Waste Segregation – Reduce garbage in landfills.</li>
          <li>📊 Stricter Policies – Enforce pollution control laws for industries.</li>
        </ul>
      </section>

      <p style={styles.closing}>
        🌆 Urban pollution is a solvable crisis — it requires awareness, public cooperation, and proactive governance. A clean city is not just an aesthetic goal, but a necessity for survival.
      </p>
    </div>
  );
};

const styles = {
  container: {
    background: "#ffffff",
    padding: "50px",
    maxWidth: "960px",
    margin: "40px auto",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    fontFamily: "Segoe UI, sans-serif",
    lineHeight: "1.8",
    color: "#1a1a1a",
  },
  title: {
    fontSize: "2.6rem",
    color: "#34495e",
    marginBottom: "30px",
    textAlign: "center",
    fontWeight: 700,
  },
  intro: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#2c3e50",
    marginBottom: "15px",
    borderBottom: "2px solid #2980b9",
    display: "inline-block",
    paddingBottom: "5px",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "1.05rem",
  },
  closing: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginTop: "40px",
    textAlign: "center",
    color: "#2e7d32",
  },
};

export default UrbanPollution;
