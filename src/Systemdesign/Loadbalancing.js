import React from "react";

const LoadBalancingAndAutoScaling = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>⚖️ Load Balancing & 🚀 Auto Scaling Explained</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          In modern cloud-based architectures, building resilient and scalable applications is critical. Two core components of that are:
          <strong> Load Balancing</strong> and <strong>Auto Scaling</strong>.
        </p>
      </section>

      {/* Load Balancing Section */}
      <div style={styles.featureBox}>
        <h2 style={styles.subTitle}>⚖️ What is Load Balancing?</h2>
        <p style={styles.paragraph}>
          Load Balancing is the process of distributing incoming network traffic across multiple servers. This ensures no single server becomes overwhelmed, improves response time, and increases system reliability.
        </p>
        <ul style={styles.bulletPoints}>
          <li>✅ Spreads traffic across healthy instances.</li>
          <li>✅ Ensures high availability and fault tolerance.</li>
          <li>✅ Detects unhealthy servers and stops sending them traffic.</li>
          <li>✅ Supports SSL termination and session persistence.</li>
          <li>✅ Types: Application Load Balancer (ALB), Network Load Balancer (NLB), Classic Load Balancer (CLB).</li>
        </ul>
      </div>

      {/* Auto Scaling Section */}
      <div style={styles.featureBoxAlt}>
        <h2 style={styles.subTitle}>🚀 What is Auto Scaling?</h2>
        <p style={styles.paragraph}>
          Auto Scaling automatically adjusts the number of compute resources (like EC2 instances) based on load or schedules. It helps manage cost while ensuring performance and availability.
        </p>
        <ul style={styles.bulletPoints}>
          <li>📈 Scales out when demand increases (adds more instances).</li>
          <li>📉 Scales in when demand decreases (removes excess instances).</li>
          <li>📆 Can also scale on fixed schedules (e.g., weekends).</li>
          <li>🛡️ Ensures redundancy and failover with minimum manual effort.</li>
          <li>💸 Helps reduce cloud cost through optimization.</li>
        </ul>
      </div>

      {/* Combined System Design Summary */}
      <section style={styles.section}>
        <h2 style={styles.subTitle}>🧠 Why Use Both Together?</h2>
        <p style={styles.paragraph}>
          Together, Load Balancing and Auto Scaling make your architecture elastic and fault-tolerant:
        </p>
        <div style={styles.sideBySide}>
          <div style={styles.sideCard}>
            <h3>Load Balancer</h3>
            <ul>
              <li>Handles incoming traffic</li>
              <li>Distributes load evenly</li>
              <li>Detects unhealthy instances</li>
              <li>Improves reliability</li>
            </ul>
          </div>
          <div style={styles.sideCard}>
            <h3>Auto Scaling</h3>
            <ul>
              <li>Adds/removes servers dynamically</li>
              <li>Responds to real-time load</li>
              <li>Minimizes cost</li>
              <li>Improves scalability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section style={styles.quote}>
        💡 *Real-World Example:* Netflix uses load balancers to handle millions of simultaneous viewers and auto scaling to instantly provision servers when a new season drops.
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "30px",
    background: "#fafcff",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1e2b3a"
  },
  title: {
    fontSize: "2.6rem",
    textAlign: "center",
    color: "#0a192f",
    marginBottom: "30px"
  },
  section: {
    marginBottom: "40px",
    backgroundColor: "#eef2f7",
    padding: "20px 25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  },
  subTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#2d3748"
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#34495e"
  },
  featureBox: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderLeft: "6px solid #3498db",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.07)"
  },
  featureBoxAlt: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderLeft: "6px solid #2ecc71",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.07)"
  },
  bulletPoints: {
    marginTop: "15px",
    paddingLeft: "20px",
    lineHeight: "1.7",
    color: "#2c3e50"
  },
  sideBySide: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  sideCard: {
    flex: "1 1 45%",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    borderLeft: "4px solid #5dade2"
  },
  quote: {
    marginTop: "30px",
    fontStyle: "italic",
    fontSize: "1.1rem",
    color: "#555",
    backgroundColor: "#e9f7ef",
    padding: "16px 20px",
    borderRadius: "10px",
    borderLeft: "5px solid #2ecc71"
  }
};

export default LoadBalancingAndAutoScaling;
