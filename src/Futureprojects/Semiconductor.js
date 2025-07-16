import React from "react";

function SemiconductorManufacturing() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔧 Semiconductor Manufacturing in India: Powering the Digital Future</h1>
      <p style={styles.intro}>
        India is rapidly positioning itself as a significant player in the global semiconductor industry. With increasing demand for electronics, the push for self-reliance, and supportive government initiatives, semiconductor manufacturing in India is entering a promising phase.
      </p>

      <h2 style={styles.subheading}>📌 Why Semiconductors Matter</h2>
      <ul style={styles.list}>
        <li>Backbone of modern electronics: smartphones, laptops, automobiles, defense systems, and medical devices.</li>
        <li>Key to strategic technologies like AI, IoT, 5G, and aerospace.</li>
        <li>Vital for national security and reducing import dependency.</li>
      </ul>

      <h2 style={styles.subheading}>🏗️ Current Manufacturing Ecosystem</h2>
      <p>
        India currently has limited semiconductor fabs but is rapidly developing its ecosystem through:
      </p>
      <ul style={styles.list}>
        <li><strong>ISRO & DRDO:</strong> In-house chip development for satellites and defense.</li>
        <li><strong>CDAC:</strong> Initiatives for indigenous chip design like VEGA microprocessors.</li>
        <li><strong>Startups & Academia:</strong> Collaboration on chip design and EDA tools.</li>
      </ul>

      <h2 style={styles.subheading}>📈 Government Initiatives</h2>
      <ul style={styles.list}>
        <li><strong>PLI Scheme:</strong> ₹76,000 crore package for semiconductor and display manufacturing.</li>
        <li><strong>India Semiconductor Mission (ISM):</strong> A nodal body for policy, funding, and partnerships.</li>
        <li><strong>Chips to Startup Program:</strong> Focus on training engineers and researchers.</li>
      </ul>

      <h2 style={styles.subheading}>🏭 Upcoming Semiconductor Fabs</h2>
      <ul style={styles.list}>
        <li><strong>Vedanta-Foxconn:</strong> A $19.5B JV to set up India’s first major semiconductor fab in Gujarat.</li>
        <li><strong>ISMC & IGSS Ventures:</strong> Proposed fabs in Karnataka and Tamil Nadu respectively.</li>
        <li><strong>Tata Group:</strong> Expanding into chip packaging and eventually full-scale fab development.</li>
      </ul>

      <h2 style={styles.subheading}>🌍 Global Relevance</h2>
      <p>
        Geopolitical tensions and chip shortages have underscored the need for diversified supply chains. India’s entry into semiconductor manufacturing can reduce global reliance on East Asia and contribute to global stability.
      </p>

      <h2 style={styles.subheading}>🚀 Challenges Ahead</h2>
      <ul style={styles.list}>
        <li>High capital investment and long gestation periods.</li>
        <li>Lack of skilled workforce and deep-tech R&D infrastructure.</li>
        <li>Global competition from established giants like TSMC, Intel, and Samsung.</li>
      </ul>

      <h2 style={styles.subheading}>🌟 The Road Ahead</h2>
      <p>
        India’s ambition to become a global semiconductor hub is bold yet achievable. With the right policy push, private investment, and global collaboration, India can not only meet its domestic demand but also emerge as a global exporter in the near future.
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

const styles = {
  container: {
    padding: "40px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#f5f5f5",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
  },
  subheading: {
    fontSize: "1.8rem",
    marginTop: "30px",
    marginBottom: "15px",
    color: "#ffd700",
  },
  intro: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "30px",
  },
  list: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    paddingLeft: "20px",
  }
};

export default SemiconductorManufacturing;
