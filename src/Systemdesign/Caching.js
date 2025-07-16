import React from "react";

const CachingTechniques = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>⚡ Caching Techniques for Speed Optimization</h1>
      
      {/* Intro */}
      <section style={styles.section}>
        <p style={styles.intro}>
          Caching is one of the most powerful tools to improve the performance and responsiveness of systems. It reduces latency, decreases load on servers, and speeds up the user experience by storing frequently accessed data in fast storage.
        </p>
      </section>

      {/* Why Cache? */}
      <section style={styles.card}>
        <h2 style={styles.heading}>🎯 Why Use Caching?</h2>
        <ul style={styles.list}>
          <li>⚡ Faster data access for frequently requested content</li>
          <li>📉 Reduced backend load and database queries</li>
          <li>📡 Improved scalability during high traffic</li>
          <li>💰 Lower cost due to fewer database calls</li>
        </ul>
      </section>

      {/* Types of Caching */}
      <section style={styles.cardAlt}>
        <h2 style={styles.heading}>📦 Types of Caching</h2>
        <ul style={styles.list}>
          <li><strong>Browser Cache:</strong> Stores static assets like JS, CSS, images locally on the user's device.</li>
          <li><strong>CDN Cache:</strong> Content Delivery Networks cache content at edge servers close to the user.</li>
          <li><strong>Application Cache:</strong> Stores data in memory (like Redis or Memcached) within your backend or frontend logic.</li>
          <li><strong>Database Cache:</strong> Frequently accessed query results are cached to avoid heavy DB hits.</li>
          <li><strong>Reverse Proxy Cache:</strong> Tools like Varnish or NGINX cache server responses before reaching the application.</li>
        </ul>
      </section>

      {/* How It Works */}
      <section style={styles.section}>
        <h2 style={styles.heading}>🔁 How Caching Works</h2>
        <p style={styles.paragraph}>
          When a user makes a request, the system first checks if the response is present in the cache:
        </p>
        <ul style={styles.list}>
          <li>✅ If found, return cached response (FAST!)</li>
          <li>❌ If not found, process the request, store the response in cache, and return it</li>
        </ul>
        <p style={styles.note}>
          Example: A search for popular products on Amazon is served from cache, while less frequent queries are fetched live.
        </p>
      </section>

      {/* Tools & Libraries */}
      <section style={styles.card}>
        <h2 style={styles.heading}>🧰 Common Caching Tools</h2>
        <ul style={styles.list}>
          <li>🧠 <strong>Redis:</strong> In-memory key-value store, super fast and widely used for app-level caching</li>
          <li>💨 <strong>Memcached:</strong> Lightweight in-memory caching layer</li>
          <li>🌍 <strong>CloudFront:</strong> AWS CDN that caches static + dynamic content</li>
          <li>🧱 <strong>Varnish:</strong> HTTP reverse proxy caching content at the edge</li>
        </ul>
      </section>

      {/* Final Note */}
      <section style={styles.quote}>
        💡 *Tip:* Always implement cache invalidation policies. Stale data in cache can mislead users and break UX.
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
    fontFamily: "Poppins, sans-serif",
    background: "#fefefe",
    color: "#1f2d3d"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "30px",
    color: "#0d47a1"
  },
  section: {
    backgroundColor: "#f1f5f9",
    borderLeft: "5px solid #4f46e5",
    padding: "20px 25px",
    borderRadius: "12px",
    marginBottom: "30px"
  },
  card: {
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
    borderLeft: "6px solid #0d9488",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  cardAlt: {
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 12px rgba(0,0,0,0.05)",
    borderLeft: "6px solid #c026d3",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "30px"
  },
  heading: {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#1e3a8a"
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.8"
  },
  intro: {
    fontSize: "1.1rem",
    lineHeight: "1.9",
    color: "#374151"
  },
  list: {
    paddingLeft: "20px",
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#374151"
  },
  note: {
    marginTop: "10px",
    fontStyle: "italic",
    color: "#4b5563"
  },
  quote: {
    marginTop: "30px",
    fontStyle: "italic",
    fontSize: "1.1rem",
    backgroundColor: "#fef9c3",
    padding: "16px 20px",
    borderLeft: "5px solid #facc15",
    borderRadius: "8px",
    color: "#92400e"
  }
};

export default CachingTechniques;
