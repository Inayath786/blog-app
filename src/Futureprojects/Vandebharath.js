import React from "react";

function VandeBharat() {
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
    color: "#00e6e6",
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
      <h1 style={headingStyle}>🚄 Vande Bharat Expansion Plan – India’s Bullet of Progress</h1>

      <h2 style={subheadingStyle}>🌟 Introduction</h2>
      <p style={paragraphStyle}>
        Vande Bharat Express, also known as Train 18, represents the pride of Indian Railways as
        the country's first indigenous semi-high-speed train. With an ambitious target to connect
        every corner of the country, the Government of India has laid out an aggressive expansion
        plan to roll out more than <strong>400 Vande Bharat trains</strong> in the next few years.
      </p>

      <h2 style={subheadingStyle}>📈 Timeline & Phases</h2>
      <p style={paragraphStyle}>
        The expansion is planned in multiple phases, covering key zones and states with modern
        rail infrastructure.
      </p>
      <ul style={bulletStyle}>
        <li>🔹 <strong>Phase 1:</strong> 75 trains by August 2024 across major metros</li>
        <li>🔹 <strong>Phase 2:</strong> Connecting tier-2 and tier-3 cities with high-speed corridors</li>
        <li>🔹 <strong>Phase 3:</strong> Inclusion of routes in North East and border areas</li>
      </ul>

      <h2 style={subheadingStyle}>🚉 Key Features of Vande Bharat 2.0</h2>
      <ul style={bulletStyle}>
        <li>✅ Speed up to 180 km/h</li>
        <li>✅ Automatic doors & GPS-based passenger information</li>
        <li>✅ Improved seating, Wi-Fi, infotainment</li>
        <li>✅ Energy-efficient and 100% Make in India</li>
        <li>✅ Kavach safety system (anti-collision)</li>
      </ul>

      <h2 style={subheadingStyle}>📍 Routes Already Active</h2>
      <ul style={bulletStyle}>
        <li>Delhi – Varanasi</li>
        <li>Mumbai – Gandhinagar</li>
        <li>Chennai – Mysuru</li>
        <li>Secunderabad – Visakhapatnam</li>
        <li>Ajmer – Delhi Cantt</li>
      </ul>

      <h2 style={subheadingStyle}>🚀 Impact on India</h2>
      <p style={paragraphStyle}>
        The Vande Bharat expansion isn't just about trains; it's about boosting:
      </p>
      <ul style={bulletStyle}>
        <li>🌆 Regional connectivity</li>
        <li>💼 Economic growth and tourism</li>
        <li>⚡ Reducing dependence on fossil-fuel transportation</li>
        <li>🏗️ Creating thousands of jobs in manufacturing and operations</li>
      </ul>

      <h2 style={subheadingStyle}>🔮 The Future Ahead</h2>
      <p style={paragraphStyle}>
        By 2030, India aims to have an extensive network of semi-high-speed and bullet trains.
        With partnerships from Japan, Europe, and private players, the rail revolution is already
        underway. The Vande Bharat is just the beginning of a high-speed India.
      </p>

      <h2 style={subheadingStyle}>💬 Final Thoughts</h2>
      <p style={paragraphStyle}>
        Vande Bharat is more than a train – it's a symbol of Atmanirbhar Bharat, progress, and
        future-ready infrastructure. As more coaches roll out, India is on track to becoming a
        global railway leader.
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

export default VandeBharat;
