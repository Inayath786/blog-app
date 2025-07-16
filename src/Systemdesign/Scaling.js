import React from "react";

const ScalingSystems = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📈 How Systems Scale: Horizontal vs Vertical Scaling</h1>

      <section style={styles.intro}>
        <p>
          In software architecture and system design, *scaling* refers to the ability of a system to handle increased load. There are two primary types of scaling:
          <strong> Vertical Scaling</strong> and <strong>Horizontal Scaling</strong>.
        </p>
      </section>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🔼 Vertical Scaling (Scale Up)</h2>
          <ul style={styles.list}>
            <li>Increase resources (CPU, RAM, Storage) on a single server.</li>
            <li>Simple to implement.</li>
            <li>Has a limit (hardware max capacity).</li>
            <li>Usually requires downtime.</li>
            <li>Example: Upgrading from t2.micro to m5.large in AWS EC2.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>➡️ Horizontal Scaling (Scale Out)</h2>
          <ul style={styles.list}>
            <li>Add more servers to the system.</li>
            <li>More complex (requires load balancing).</li>
            <li>No theoretical limit — more scalable.</li>
            <li>Can be done without downtime.</li>
            <li>Example: Adding more instances behind a Load Balancer.</li>
          </ul>
        </div>
      </div>

      <section style={styles.summary}>
        <p>
          🧠 <strong>TL;DR:</strong> 
          <em>Vertical scaling</em> is like upgrading your laptop; <em>horizontal scaling</em> is like adding more laptops to share the work. In cloud-native architectures, horizontal scaling is generally preferred for scalability and fault tolerance.
        </p>
      </section>
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
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "30px",
    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    fontFamily: "'Inter', sans-serif",
    color: "#2c3e50",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
  },
  heading: {
    fontSize: "2.6rem",
    fontFamily: "'Fira Code', monospace",
    marginBottom: "30px",
    color: "#333",
    textAlign: "center"
  },
  intro: {
    fontSize: "1.1rem",
    backgroundColor: "#f4f6f8",
    padding: "20px",
    borderLeft: "6px solid #3498db",
    borderRadius: "8px",
    marginBottom: "30px",
    lineHeight: "1.6"
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease-in-out",
    borderLeft: "5px solid #27ae60"
  },
  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#1e272e"
  },
  list: {
    listStyleType: "square",
    paddingLeft: "20px",
    lineHeight: "1.8"
  },
  summary: {
    fontSize: "1.1rem",
    backgroundColor: "#eef9f4",
    padding: "20px",
    borderRadius: "10px",
    borderLeft: "6px solid #2ecc71",
    fontStyle: "italic"
  }
};

export default ScalingSystems;
