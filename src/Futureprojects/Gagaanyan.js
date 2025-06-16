import React from "react";

function GaganyaanMission() {
  const containerStyle = {
    padding: "50px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#ffffff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "1.8",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    textAlign: "center",
    marginBottom: "30px",
    color: "#00d4ff",
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
      <h1 style={headingStyle}>🚀 Gaganyaan – India’s Leap into Human Spaceflight</h1>

      <h2 style={subheadingStyle}>🌌 Introduction</h2>
      <p style={paragraphStyle}>
        Gaganyaan is India’s first human spaceflight mission, developed by ISRO with the aim of
        sending Indian astronauts, called <strong>Vyomnauts</strong>, into space on an indigenous
        spacecraft. With Gaganyaan, India aims to become the 4th country in the world to send humans
        into space independently, after Russia, the USA, and China.
      </p>

      <h2 style={subheadingStyle}>🛰️ Mission Overview</h2>
      <ul style={bulletStyle}>
        <li>🔹 Launch Vehicle: Human-rated GSLV Mk III (LVM3)</li>
        <li>🔹 Target Altitude: ~400 km Low Earth Orbit (LEO)</li>
        <li>🔹 Crew: 2–3 astronauts</li>
        <li>🔹 Mission Duration: Up to 7 days in space</li>
        <li>🔹 Capsule Recovery: Indian Ocean splashdown</li>
      </ul>

      <h2 style={subheadingStyle}>🔬 Technology & Infrastructure</h2>
      <p style={paragraphStyle}>
        ISRO has developed a range of technologies for crew safety and mission success:
      </p>
      <ul style={bulletStyle}>
        <li>✅ Environmental Control and Life Support System (ECLSS)</li>
        <li>✅ Crew Escape System (for emergency aborts)</li>
        <li>✅ Human-rated launch vehicle and launch pad modifications</li>
        <li>✅ Training infrastructure in Bengaluru and Russia</li>
      </ul>

      <h2 style={subheadingStyle}>👩‍🚀 Astronaut Training</h2>
      <p style={paragraphStyle}>
        Four IAF pilots were selected and underwent rigorous training in Russia’s Gagarin Cosmonaut
        Training Centre. Final phases of simulation and space-suit testing are being done in India
        at ISRO’s training facilities.
      </p>

      <h2 style={subheadingStyle}>📅 Timeline & Milestones</h2>
      <ul style={bulletStyle}>
        <li>🔹 2023: Uncrewed Test Flight (TV-D1) – Successful abort mission</li>
        <li>🔹 2024: 2 more uncrewed missions to test systems</li>
        <li>🔹 Late 2025: First crewed flight scheduled</li>
      </ul>

      <h2 style={subheadingStyle}>🌍 Impact & Vision</h2>
      <p style={paragraphStyle}>
        Gaganyaan is a monumental step toward India’s long-term space vision:
      </p>
      <ul style={bulletStyle}>
        <li>🌟 Building space stations post-2030</li>
        <li>🌟 Enabling deep space missions including the Moon & Mars</li>
        <li>🌟 Strengthening space diplomacy and defense capabilities</li>
      </ul>

      <h2 style={subheadingStyle}>💬 Final Words</h2>
      <p style={paragraphStyle}>
        Gaganyaan represents not just a mission but a dream for 1.4 billion Indians. With
        indigenous innovation, international collaboration, and unwavering determination, India is
        ready to make history in human spaceflight. The sky is no longer the limit.
      </p>
    </div>
  );
}

export default GaganyaanMission;
