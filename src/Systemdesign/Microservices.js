import React from "react";

const MonolithicVsMicroservices = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🏗️ Monolithic vs Microservices Architecture</h1>

      {/* Introduction */}
      <section style={styles.introSection}>
        <p style={styles.introText}>
          As systems scale and business requirements evolve, choosing the right architecture becomes crucial. Two common architectural patterns are <strong>Monolithic</strong> and <strong>Microservices</strong>. Each has its pros and cons, and the decision often depends on your team, scalability needs, and deployment strategy.
        </p>
      </section>

      {/* Monolithic Architecture */}
      <section style={styles.card}>
        <h2 style={styles.heading}>🧱 Monolithic Architecture</h2>
        <p style={styles.text}>
          A monolithic application is built as a single unit. All functionalities like authentication, payments, product management, etc., are tightly coupled and reside in one codebase.
        </p>
        <h4 style={styles.subheading}>✅ Advantages:</h4>
        <ul style={styles.list}>
          <li>Simple to develop and deploy</li>
          <li>Easy to debug and test in early stages</li>
          <li>Less overhead in communication</li>
        </ul>
        <h4 style={styles.subheading}>❌ Disadvantages:</h4>
        <ul style={styles.list}>
          <li>Harder to scale specific components</li>
          <li>Slower deployment — a small change requires redeploying the entire app</li>
          <li>Codebase becomes huge and difficult to maintain over time</li>
        </ul>
      </section>

      {/* Microservice Architecture */}
      <section style={styles.cardAlt}>
        <h2 style={styles.heading}>🧩 Microservices Architecture</h2>
        <p style={styles.text}>
          In Microservices, the application is split into smaller, independent services. Each service is responsible for a specific business function and can be developed, deployed, and scaled independently.
        </p>
        <h4 style={styles.subheading}>✅ Advantages:</h4>
        <ul style={styles.list}>
          <li>Better scalability — each service can scale based on its own needs</li>
          <li>Faster deployments and easier updates</li>
          <li>Teams can work independently on different services</li>
        </ul>
        <h4 style={styles.subheading}>❌ Disadvantages:</h4>
        <ul style={styles.list}>
          <li>Complex inter-service communication</li>
          <li>Distributed system challenges like latency, fault tolerance</li>
          <li>Requires DevOps maturity and proper monitoring</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section style={styles.section}>
        <h2 style={styles.heading}>🧐 When to Choose What?</h2>
        <p style={styles.text}>
          <strong>Monolith:</strong> Suitable for small teams, early-stage startups, or MVPs.<br />
          <strong>Microservices:</strong> Best for large-scale systems with independent domains (e.g., Netflix, Amazon).
        </p>
      </section>

      {/* Real World Examples */}
      <section style={styles.quote}>
        🏢 <strong>Netflix, Amazon, and Uber</strong> are built on microservices due to their global scale.<br />
        🚀 <strong>Early-stage startups</strong> usually start with a monolith for faster development.
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
  page: {
    maxWidth: "1000px",
    margin: "auto",
    padding: "40px 30px",
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#fefefe",
    color: "#1f2937"
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
    color: "#0c4a6e"
  },
  introSection: {
    backgroundColor: "#e0f2fe",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  introText: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#0f172a"
  },
  card: {
    backgroundColor: "#fff7ed",
    padding: "25px",
    borderLeft: "5px solid #ea580c",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  cardAlt: {
    backgroundColor: "#ecfdf5",
    padding: "25px",
    borderLeft: "5px solid #059669",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  section: {
    backgroundColor: "#f1f5f9",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1e3a8a",
    marginBottom: "10px"
  },
  subheading: {
    fontSize: "1.1rem",
    fontWeight: "500",
    marginTop: "15px"
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.7",
    marginTop: "10px"
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.7",
    color: "#374151"
  },
  quote: {
    marginTop: "30px",
    fontStyle: "italic",
    backgroundColor: "#fef3c7",
    padding: "18px 22px",
    borderLeft: "5px solid #f59e0b",
    borderRadius: "10px",
    fontSize: "1.1rem",
    color: "#92400e"
  }
};

export default MonolithicVsMicroservices;
