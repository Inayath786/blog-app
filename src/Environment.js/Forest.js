import React from "react";

const ForestConservation = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌲 Forest Conservation Efforts</h1>
      <p style={styles.intro}>
        Forests are the lungs of the Earth, absorbing carbon dioxide, releasing oxygen, and maintaining ecological balance. Yet, they are under constant threat due to deforestation, climate change, and human activities. Let’s explore the ongoing conservation efforts aimed at protecting these vital ecosystems.
      </p>

      <section style={styles.section}>
        <h2 style={styles.heading}>🌍 Why Forests Matter</h2>
        <ul style={styles.list}>
          <li>🌱 Absorb carbon and fight global warming</li>
          <li>🌧️ Maintain the water cycle and prevent soil erosion</li>
          <li>🦜 Home to 80% of terrestrial biodiversity</li>
          <li>👨‍🌾 Support the livelihood of 1.6 billion people globally</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>🛡️ Major Conservation Efforts</h2>
        <ul style={styles.list}>
          <li>📜 <strong>Protected Areas:</strong> Creation of national parks and wildlife sanctuaries</li>
          <li>🚫 <strong>Ban on Illegal Logging:</strong> Stricter laws and patrols to control deforestation</li>
          <li>🌿 <strong>Afforestation & Reforestation:</strong> Planting trees to restore green cover</li>
          <li>🌎 <strong>Global Initiatives:</strong> REDD+, UN Decade on Ecosystem Restoration</li>
          <li>🏞️ <strong>Community Forest Management:</strong> Involving local people in preservation</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>🌟 Notable Programs</h2>
        <ul style={styles.list}>
          <li>🇮🇳 <strong>India’s Green India Mission</strong> – Aims to increase forest cover by 5 million hectares</li>
          <li>🌐 <strong>Bonn Challenge</strong> – Global effort to restore 350 million hectares by 2030</li>
          <li>📈 <strong>Carbon Credit Programs</strong> – Encouraging conservation through economic benefits</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>🌳 How You Can Help</h2>
        <ul style={styles.list}>
          <li>📚 Educate yourself and others about forest importance</li>
          <li>🪵 Buy certified sustainable wood products</li>
          <li>🌱 Join local tree plantation drives</li>
          <li>♻️ Reduce paper usage and recycle</li>
        </ul>
      </section>

      <p style={styles.closing}>
        Every tree matters. Forest conservation is not just about protecting nature — it’s about securing a future where humans and ecosystems thrive together.
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
};

const styles = {
  container: {
    background: "linear-gradient(to bottom right, #e8f5e9, #ffffff)",
    padding: "40px",
    maxWidth: "960px",
    margin: "40px auto",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', sans-serif",
    lineHeight: "1.8",
    color: "#2e7d32",
  },
  title: {
    fontSize: "2.8rem",
    color: "#1b5e20",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: 700,
  },
  intro: {
    fontSize: "1.2rem",
    color: "#33691e",
    marginBottom: "30px",
    textAlign: "center",
  },
  section: {
    marginBottom: "40px",
  },
  heading: {
    fontSize: "1.6rem",
    color: "#2e7d32",
    marginBottom: "10px",
    borderBottom: "2px solid #66bb6a",
    paddingBottom: "4px",
    display: "inline-block",
  },
  list: {
    paddingLeft: "25px",
    fontSize: "1.1rem",
    color: "#33691e",
  },
  closing: {
    marginTop: "40px",
    fontSize: "1.25rem",
    fontStyle: "italic",
    color: "#1b5e20",
    textAlign: "center",
  },
};

export default ForestConservation;
